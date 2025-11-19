const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const { listingSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const { reviewSchema } = require("./schema.js");
const multer  = require('multer')
const {storage} = require("./cloudConfig.js")
const upload = multer({storage})


module.exports.validateReviews = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};



module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};


module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
};

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a listing!");
        return res.redirect("/login");
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    try {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "Listing you requested for does not exist!");
            return res.redirect("/listings");
        }
        if (!listing.owner || !listing.owner.equals(req.user._id)) {
            req.flash("error", "You don't have permission to do that!");
            return res.redirect(`/listings/${id}`);
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    try {
        let { reviewId } = req.params;
        const review = await Review.findById(reviewId);
        if (!review) {
            req.flash("error", "Review not found!");
            return res.redirect(`/listings/${req.params.id}`);
        }
        if (!review.author || !review.author.equals(req.user._id)) {
            req.flash("error", "You don't have permission to do that!");
            return res.redirect(`/listings/${req.params.id}`);
        }
        next();
    } catch (err) {
        next(err);
    }
};

// Multer error handling wrapper for create
module.exports.handleMulterErrorCreate = (req, res, next) => {
  upload.single("listing[Image]")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (res.headersSent) {
        return next(err);
      }
      if (err.code === 'LIMIT_FILE_SIZE') {
        req.flash("error", "File too large! Maximum file size is allowed.");
        return res.redirect("/listings/new");
      }
      req.flash("error", "File upload error: " + err.message);
      return res.redirect("/listings/new");
    } else if (err) {
      return next(err);
    }
    next();
  });
};

// Multer error handling wrapper for update
module.exports.handleMulterErrorUpdate = (req, res, next) => {
  upload.single("listing[Image]")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (res.headersSent) {
        return next(err);
      }
      if (err.code === 'LIMIT_FILE_SIZE') {
        req.flash("error", "File too large! Maximum file size is allowed.");
        return res.redirect(`/listings/${req.params.id}/edit`);
      }
      req.flash("error", "File upload error: " + err.message);
      return res.redirect(`/listings/${req.params.id}/edit`);
    } else if (err) {
      return next(err);
    }
    next();
  });
};
