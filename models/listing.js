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
        default: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        set: (v)=> v ===""? "https://images.unsplash.com/photo-1571896349842-33c89424de2d": v,
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