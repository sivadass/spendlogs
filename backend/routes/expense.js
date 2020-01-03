const router = require("express").Router();
const Expense = require("../model/Expense");
const { expenseValidation } = require("../validation");
const verify = require("./verifyToken");

router.post("/", verify, async (req, res) => {
  const { error } = expenseValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const post = new Expense({
    amount: req.body.amount,
    payee: req.body.payee,
    categoryId: req.body.categoryId,
    comment: req.body.comment,
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
  const { categoryId } = req.query;
  let query = {};
  if (categoryId) {
    query.categoryId = categoryId;
  }
  try {
    const allExpenses = await Expense.find(query).populate(
      "category",
      "label value -_id"
    );
    res.send(allExpenses);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const expenseDetails = await Expense.findById(req.params.id).populate(
      "category",
      "label value -_id"
    );
    res.send(expenseDetails);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
