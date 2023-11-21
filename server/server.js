require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Database connection
const { connect_func } = require("./utilities/connect");
connect_func();

const app = express();
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "build")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
const AuthRoute = require("./routes/AuthRoute");
app.use("/v1/test", (req, res) => {
  res.status(200).json({ msg: "Test Route" });
});

app.use("/v1/auth", AuthRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Started at port: ${process.env.PORT}`);
});
