const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing, handleMulterErrorCreate, handleMulterErrorUpdate } = require("../middleware.js");
const listingController = require("../controllers/listings.js");



//router.route//Listings route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn, handleMulterErrorCreate, validateListing, wrapAsync(listingController.createListing));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

//update Route//Show Route//Delete Route
router
  .route("/:id")
  .put(
     isLoggedIn,
    isOwner,
    handleMulterErrorUpdate,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .get( wrapAsync(listingController.showListing))
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );

module.exports = router;
