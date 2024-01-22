const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  id: {
    type: Number,
    require: true,
  },
  phone_no: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  Department: {
    type: String,
    require: true,
  },
  admin: {
    type: boolean,
    require: true,
  },
});

module.exports = venueModel = mongoose.model("user", venueSchema);
