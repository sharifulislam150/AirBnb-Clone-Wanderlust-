//require things 01
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingShema} = require("./schema.js");

//Mongo DB connection 03
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

//Ejs Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


//schema server side validation
const validateListing=(req,res,next)=>{
 let {error} = listingShema.validate(req.body);
  console.log(error)
  if(error){
    let errMsg = error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,errMsg)
  }else{
    next()
  }
}

//Basic API 04
app.get("/", (req, res) => {
  res.send("Hi This is Root");
});

// Index Route (where show all listing)

app.get("/listings", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
}));
//New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//create Route
app.post("/listings", validateListing, wrapAsync(async (req, res,next) => {
  //  if (!req.body) throw new ExpressError(400, "Invalid listing data!");
  const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));
//Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

//update Route
app.put("/listings/:id",validateListing, wrapAsync(async (req, res) => {
   if (!req.body) throw new ExpressError(400, "Invalid listing data!");
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
  console.log(id);
}));

//Show Route
app.get("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", { listing });
}));

//Delete Route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));

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

//page not found err
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});


//Error Handling
app.use((err, req, res, next) => {
  let { statusCode=500 , message="something went wrong" } = err;
  // res.status(statusCode).send(message)
  res.status(statusCode).render("error.ejs",{err})
});

//chatgpt error code
// app.use((err, req, res, next) => {
//   const { statusCode = 500 } = err;
//   if (!err.message) err.message = "Something went wrong!";
//   res.status(statusCode).render("error", { err });
// });

//server connection 02
app.listen(8080, () => {
  console.log("server is start");
});
