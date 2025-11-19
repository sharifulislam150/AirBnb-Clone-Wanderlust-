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
    initData.data = initData.data.map((obj)=>({...obj, owner:"6919724cd45a629ed6f99258"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized")
};

initDB();