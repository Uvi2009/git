// Node Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

// configurations
require("dotenv").config();
const app = express();

//middleewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mongodb modules
const venueModel=require("./models/venue")

// routers
const venueRouter = require("./routers/venue")

// controllers
const {upload,upload1}= require("./controllers/multer")

// mongoDb setup
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Successfully connected in ", port);
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT || 6789;
app.listen(port);

// Routers
app.use("/venue",venueRouter)

app.post("/yuvaraj",(req,res)=>{
  res.send(req.body)
})

// venueModel.create({
//   name:"yuvaraj",
//   id:69,
//   phone_no:9042456776,
//   email:"yuvaraj1102003@gmail.com",
//   incharge:"vasanth",
//   capacity:6969,
//   amount:696969,

// }


