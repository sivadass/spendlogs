const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
// import routes
const authRoute = require("./routes/auth");
const expenseRoute = require("./routes/expense");
const categoryRoute = require("./routes/category");

const seedData = require("./seed");

const BACKEND_PORT_NUMBER = 5001;

// config env variables
dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useFindAndModify: false },
  () => console.log("🌍 ==> Connected to Mongo Atlas DB 🔥")
);

// Middle ware
app.use(cors());
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "public")));

// route middlewares
app.use("/api/v1/user", authRoute);
app.use("/api/v1/expense", expenseRoute);
app.use("/api/v1/category", categoryRoute);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/seed_data/", async (req, res) => {
  try {
    const data = await seedData();
    res.json(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(process.env.PORT || BACKEND_PORT_NUMBER, () =>
  console.log("🌍  ==> Spendlogs API server is on 🔥")
);
