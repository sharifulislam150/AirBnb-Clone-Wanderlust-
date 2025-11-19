const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isReviewAuthor, validateReviews } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")





// Add Review
router.post(
  "/",
  isLoggedIn,
  validateReviews,
  wrapAsync(reviewController.createReview)
);


//reviews deleted route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;