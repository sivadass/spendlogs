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

router.get("/", verify, async (req, res) => {
  const { categoryId } = req.query;
  let query = {};
  if (categoryId) {
    query.categoryId = categoryId;
  }
  if (req.user.role !== "admin") {
    query.owner = req.user._id;
  }
  try {
    const allExpenses = await Expense.find(query)
      .sort("-paidOn")
      .limit(5)
      .populate("category", "label value icon color -_id");
    res.send(allExpenses);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/:id", verify, async (req, res) => {
  let query = {};
  if (req.user.role !== "admin") {
    query.owner = req.user._id;
  }
  try {
    const expenseDetails = await Expense.findById(
      req.params.id,
      (err, detail) => {
        var opts = [{ path: "category", match: { owner: req.user._id } }];
        Expense.populate(detail, opts, function(err, details) {
          console.log(details);
        });
      }
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

var getTotal = function(ownerId) {
  Expense.aggregate(
    [{ $group: { total: { $sum: "$amount" } } }, { $sort: { total: -1 } }],
    function(err, result) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      return result;
    }
  );
};

router.get("/stats", verify, async (req, res) => {
  try {
    const data = await getTotal(req.user._id);
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
