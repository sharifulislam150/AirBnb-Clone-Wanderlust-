const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing  = require("../models/listing.js");

//connection DB
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL)
}


// function create to initialize data
async function initDB() {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized")
};

initDB();