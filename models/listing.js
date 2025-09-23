const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    Image: {
        type: String,
        default: "https://unsplash.com/photos/gray-wooden-house-178j8tJrNlc",
        set: (v)=> v ===""? "https://unsplash.com/photos/gray-wooden-house-178j8tJrNlc": v,
    },
    price:{
        type:Number
    }, 
    location: {
        type: String,
    },
    country:{
        type: String,
    }
});

const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;