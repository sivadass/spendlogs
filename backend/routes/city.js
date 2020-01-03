const router = require("express").Router();
const City = require("../model/City");

router.get("/", async (req, res) => {
  try {
    const allCities = await City.find({});
    res.send(allCities);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
