//require things 01
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const flash = require("connect-flash");
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

//use express session
const sessionOptions ={
  secret: "MycodeIsPure",
  resave: false,
  saveUninitialized:true,
  cookie:{
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
};

//Basic API 04
app.get("/", (req, res) => {
  res.send("Hi This is Root");
});

app.use(session(sessionOptions));
app.use(flash())

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
})

// Index Route (where show all listing)

app.use("/listings",listings);
app.use("/listings/:id/reviews", reviews )



//page not found err
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

//Error Handling
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  // res.status(statusCode).send(message)
  res.status(statusCode).render("error.ejs", { err });
});


//server connection 02
app.listen(8080, () => {
  console.log("server is start");
});
