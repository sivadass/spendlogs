const router = require("express").Router();
const axios = require("axios");
const _get = require("lodash/get");

const MAILCHIMP_SUBSCRIBER_LIST = "ecbe3935bc";

router.post("/", async (req, res) => {
  try {
    await axios.post(
      `https://us4.api.mailchimp.com/3.0/lists/${MAILCHIMP_SUBSCRIBER_LIST}/members/`,
      {
        email_address: req.body.email,
        status: "subscribed"
      },
      {
        auth: {
          username: "ui-jobs",
          password: process.env.MAILCHIMP_API_KEY
        }
      }
    );
    res.send("Hey, you are successfully subscribed, thanks!");
  } catch (err) {
    console.log("mc error", err.response.data);
    if (_get(err, "response.data.title") === "Member Exists") {
      res.status(400).send("Hey, you are already subscribed, thanks!");
    } else {
      res.status(400).send(err.message);
    }
  }
});

module.exports = router;
