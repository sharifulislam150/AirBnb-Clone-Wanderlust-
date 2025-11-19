const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    // Image: {
    //     type: String,
    //     default: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    //     set: (v)=> v ===""? "https://images.unsplash.com/photo-1571896349842-33c89424de2d": v,
    // },
    Image:{
        url: String,
        filename: String
    },
    price:{
        type:Number
    }, 
    location: {
        type: String,
    },
    country:{
        type: String,
    },
    reviews:[
    {
        type: Schema.Types.ObjectId,
        ref:"Review",
    },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});




const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;