const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const sendEmail = require("../utils/sendMail");
const messageWithActionTemplate = require("../emails/messageWithAction");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    role: req.body.role
  });

  try {
    const savedUser = await user.save();
    const info = {};
    info.userId = savedUser._id;
    info.expiry = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const token = jwt.sign(info, process.env.TOKEN_SECRET);
    const msg = {
      to: `${user.name} <${user.email}>`,
      from: `Spendlogs <no-reply@spendlogs.app>`,
      subject: "Email Verification",
      html: messageWithActionTemplate(
        `Hi ${user.name},`,
        `Thank you for signing up with <b>Spendlogs</b>. <br/>Please verify your email address by clicking the button below to complete the registration.`,
        `https://spendlogs.ml/auth/verify?token=${token}`,
        "Verify my email now!"
      )
    };
    try {
      await sendEmail(msg);
      res.send("Verification email sent!");
    } catch (err) {
      res.status(400).send(err);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email/password!");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Incorrect email/password!");

  const token = jwt.sign(
    { _id: user._id, role: user.role, email: user.email, name: user.name },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "24h"
    }
  );
  res.header("auth-token", token).send({ "auth-token": token });
});

router.get("/verifyEmail", async (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(400).send("Token not provided!");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const { userId, expiry } = decoded;
    if (new Date(expiry) > new Date()) {
      const user = await User.findOne({ _id: userId });
      if (!user.activated) {
        user.activated = true;
        try {
          user.save();
          const msg = {
            to: `${user.name} <${user.email}>`,
            from: `Spendlogs <no-reply@spendlogs.app>`,
            subject: "Registration Successful 👍",
            html: messageWithActionTemplate(
              `Hi ${user.name},`,
              `Warm welcome to <b>Spendlogs</b>.<br/> Your email address is successfully verified. <br/> You can login now with your email and password.`,
              `https://spendlogs.ml/auth/login`,
              "Login now!"
            )
          };
          sendEmail(msg);
          res.send("Email address successfully verified!");
        } catch (err) {
          res.status(400).send(err);
        }
      } else {
        res.status(400).send("User already verified!");
      }
    } else {
      res.status(410).send("Link is expired!");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/resetPassword", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Invalid Email!");
  }
  try {
    const user = await User.findOne({ email: email });

    const info = {};
    info.email = user.email;
    info.userId = user._id;
    info.expiry = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    const token = jwt.sign(info, process.env.TOKEN_SECRET);
    const msg = {
      to: `${user.name} <${user.email}>`,
      from: `Spendlogs <no-reply@spendlogs.app>`,
      subject: "Reset Your Password",
      html: messageWithActionTemplate(
        `Hi ${user.name},`,
        `Your recently tried to reset your password. Please use the link below to reset the same. <br/> <br/>And also, please note that the link will expire after <b>24 hrs</b> from now.`,
        `https://spendlogs.ml/auth/update-password?token=${token}`,
        "Reset my password!"
      )
    };
    sendEmail(msg);
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send("Invalid email!");
  }
});

router.post("/updatePassword", async (req, res) => {
  const { token, password } = req.body;
  if (!token || !password) {
    return res.status(400).send("Token/password not provided!");
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const { userId, expiry } = decoded;
    if (new Date(expiry) > new Date()) {
      const user = await User.findOne({ _id: userId });
      user.password = hashPassword;
      try {
        user.save();
        const msg = {
          to: `${user.name} <${user.email}>`,
          from: `Spendlogs <no-reply@spendlogs.app>`,
          subject: "Password Reset Successful 👍",
          text: "Your password has been successfully reset.",
          html: messageWithActionTemplate(
            `Hi ${user.name},`,
            `Your password has been successfully reset. Please use the link below to login.`,
            `https://spendlogs.ml/auth/login`,
            "Login now!"
          )
        };
        sendEmail(msg);
        res.send("Password successfully reset!");
      } catch (err) {
        res.status(400).send(err);
      }
    } else {
      res.status(410).send("Token is expired!");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
