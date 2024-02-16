const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const userDataRouter = require("./router");
const guestUserDataRouter = require("./guestrouter");
const userCommentsDataRouter = require("./commentsrouter");

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  console.log(req);
  res.send("Hell000000");
});

mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "DB is Connected 😊 Server is running on PORT " + process.env.PORT
      );
    });
  })
  .catch((e) => {
    console.log(e.message);
  });

app.use(
  "/paidUserData",
  (req, res, next) => {
    console.log("----------------");
    console.log("Method is " + req.method);
    console.log("IP Address of the access point is " + req.ip);
    console.log("Body Data is " + req.body);
    console.log("----------------");
    next();
  },
  userDataRouter,
  () => {
    console.log("Hello");
  }
);

app.use(
  "/guestUserData",
  (req, res, next) => {
    console.log("----------------");
    console.log("Method is " + req.method);
    console.log("IP Address of the access point is " + req.ip);
    console.log("Body Data is " + req.body);
    console.log("----------------");
    next();
  },
  guestUserDataRouter,
  () => {
    console.log("Hello");
  }
);

app.use(
  "/userCommentsData",
  (req, res, next) => {
    console.log("----------------");
    console.log("Method is " + req.method);
    console.log("IP Address of the access point is " + req.ip);
    console.log("Body Data is " + req.body);
    console.log("----------------");
    next();
  },
  userCommentsDataRouter,
  () => {
    console.log("Hello");
  }
);
