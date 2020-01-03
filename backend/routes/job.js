const router = require("express").Router();
const Job = require("../model/Job");
const { jobValidation } = require("../validation");
const verify = require("./verifyToken");

router.post("/", verify, async (req, res) => {
  const { error } = jobValidation(req.body);
  if (error) {
    console.log("error in post ==> ", error);
    return res.status(400).send(error.details[0].message);
  }
  const post = new Job({
    title: req.body.title,
    description: req.body.description,
    cityId: req.body.cityId,
    pay: req.body.pay,
    experience: req.body.experience,
    categoryId: req.body.categoryId,
    owner: req.user._id
  });
  try {
    const savedPost = await post.save();
    res.send(savedPost);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/", async (req, res) => {
  const { cityId, categoryId } = req.query;
  let query = {};
  if (cityId) {
    query.cityId = cityId;
  }
  if (categoryId) {
    query.categoryId = categoryId;
  }
  try {
    const allJobs = await Job.find(query)
      .populate("city", "label value -_id")
      .populate("category", "label value -_id");
    res.send(allJobs);
  } catch (err) {
    console.log("err in job", err);
    res.status(400).send(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const jobDetails = await Job.findById(req.params.id)
      .populate("city", "label value -_id")
      .populate("category", "label value -_id");
    res.send(jobDetails);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
