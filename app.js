//require things 01
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require("path")

//Mongo DB connection 03
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

//Ejs Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));


//Basic API 04
app.get("/", (req,res)=>{
    res.send("Hi This is Root");
})


// Index Route (where show all listing)

app.get("/listings", async (req, res)=>{
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings})
});
//New Route
app.get("/listings/new", (req, res)=>{
    res.render("listings/new.ejs")
})

//Create Route
app.post("/listings", async(req, res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

//Show Route
app.get("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    res.render("./listings/show.ejs",{listing})
})






// .........
// app.get("/testlisting", async(req, res)=>{
//     let samplelisting = new Listing({
//         titile: "My new Home",
//         description: "By the beach",
//         price: 12000,
//         location: "Bashundhora, Dhaka",
//         country: "Bangladesh"
//     })
 
//     await samplelisting.save();
//     console.log("sample was saved to DB")
//     res.send("Succecfull Testing")
// })


//server connection 02
app.listen(8080, ()=>{
    console.log("server is start")
})