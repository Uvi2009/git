const router = require("express").Router();
const venueModel = require("../models/venue");

router.get("/", async (req, res) => {
  try {
    const newVenue = await venueModel.findOne({ name: "yuvaraj" });
    res.send(newVenue);
  } catch (err) {
    console.log(err);
  }
});

router.post("/hlo", async (req, res) => {
    console.log("connected")
  const hlo={ name, id, phone_no, email, incharge, capacity, amount } = req.body;
  try {
    const newVenue = await venueModel.create({
      name,
      id,
      phone_no,
      email,
      incharge,
      capacity,
      amount,
    });

    console.log(hlo);
    res.send(req.body);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
