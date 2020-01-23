const router = require("express").Router();
const { ObjectId } = require("mongodb");
const Expense = require("../model/Expense");
const { expenseValidation } = require("../validation");
const verify = require("./verifyToken");

router.post("/", verify, async (req, res) => {
  const { error } = expenseValidation(req.body);
  if (error) {
    console.log("e1", error);
    return res.status(400).send(error.details[0].message);
  }
  const post = new Expense({
    amount: req.body.amount,
    payee: req.body.payee,
    categoryId: req.body.categoryId,
    // comment: req.body.comment,
    owner: req.user._id
  });
  try {
    const savedPost = await post.save();
    res.send(savedPost);
  } catch (err) {
    console.log("e2", err);
    res.status(400).send(err);
  }
});

router.get("/", verify, async (req, res) => {
  const { from, to, perPage = 0 } = req.query;
  let query = {};
  if (from && to) {
    query.paidOn = { $gte: to, $lte: from };
  }
  if (req.user.role !== "admin") {
    query.owner = req.user._id;
  }
  try {
    const allExpenses = await Expense.find(query)
      .sort("-paidOn")
      .limit(Number(perPage))
      .populate("category", "name icon -_id");
    res.send(allExpenses);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/dashboard", verify, async (req, res) => {
  const owner = req.user._id;
  return Expense.aggregate(
    [
      {
        $match: {
          owner: new ObjectId(owner)
        }
      },
      {
        $group: {
          _id: null,
          totalTransactions: {
            $sum: 1
          },
          totalAmount: {
            $sum: "$amount"
          }
        }
      }
    ],
    function(err, result) {
      if (err) {
        res.status(400).send(err);
        return;
      }
      return res.send(result);
    }
  );
});

router.get("/:id", verify, async (req, res) => {
  let query = {};
  if (req.user.role !== "admin") {
    query.owner = req.user._id;
  }
  try {
    const expenseDetails = await Expense.findById(req.params.id).populate(
      "category",
      "name icon -_id"
    );
    res.send(expenseDetails);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    Expense.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        amount: req.body.amount,
        payee: req.body.payee,
        categoryId: req.body.categoryId,
        comment: req.body.comment,
        paidOn: req.body.paidOn,
        attachment: req.body.attachment
      },
      err => {
        if (err) {
          return res.send(err);
        }
        return res.send("Successfully updated!");
      }
    );
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Expense.deleteOne({ _id: req.params.id });
    if (data.ok === 1) {
      return res.send("Successfully deleted!");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
