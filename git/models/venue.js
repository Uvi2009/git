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
  incharge: {
    type: String,
    require: true,
  },
  capacity: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  photos: {
    type: Array,
  },
  events: {
    type: Array,
  },
  services: {
    type: Array,
  },
  amenities: {
    type: Array,
  },
});

module.exports = venueModel = mongoose.model("venues", venueSchema);
