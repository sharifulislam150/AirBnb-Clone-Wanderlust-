const Listing = require("../models/listing");
const { uploadToCloudinary } = require("../cloudConfig.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
  };

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing =  async (req, res, next) => {
    //  if (!req.body) throw new ExpressError(400, "Invalid listing data!");
    if (!req.file) {
      req.flash("error", "Please upload an image for the listing!");
      return res.redirect("/listings/new");
    }
    try {
      const result = await uploadToCloudinary(req.file.buffer);
      let url = result.secure_url;
      let filename = result.public_id;
      const newListing = new Listing(req.body.listing);
      newListing.owner = req.user._id;
      newListing.Image = {url, filename}
      await newListing.save(); 
      req.flash("success", "New Listing Created");
      res.redirect("/listings");
    } catch (error) {
      req.flash("error", "Failed to upload image. Please try again.");
      return res.redirect("/listings/new");
    }
  };

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  };

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }

    // Update listing fields (excluding Image which is handled separately)
    const { Image, ...listingData } = req.body.listing;
    
    // Update fields individually to ensure proper saving
    if (listingData.title !== undefined) listing.title = listingData.title;
    if (listingData.description !== undefined) listing.description = listingData.description;
    if (listingData.price !== undefined) listing.price = listingData.price;
    if (listingData.location !== undefined) listing.location = listingData.location;
    if (listingData.country !== undefined) listing.country = listingData.country;

    // Only update image if a new file is uploaded
    if (req.file) {
      try {
        const result = await uploadToCloudinary(req.file.buffer);
        let url = result.secure_url;
        let filename = result.public_id;
        listing.Image = {
          url: url,
          filename: filename
        };
        listing.markModified('Image'); // Mark nested object as modified
      } catch (error) {
        req.flash("error", "Failed to upload image. Please try again.");
        return res.redirect(`/listings/${id}/edit`);
      }
    }
    
    await listing.save();
    req.flash("success", "Listing Update Successfully");
    res.redirect(`/listings/${id}`);
  };

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({
      path: "reviews",
      populate: {
        path: "author",
        model: "User"
      }
    }).populate("owner");
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
  };

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted Successfully!");
    res.redirect("/listings");
  };