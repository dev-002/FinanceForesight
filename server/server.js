require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

// Database connection
const { connect_func } = require("./utilities/connect");
connect_func();

const corsOption = {
  origin: "http://localhost:5173/",
};

const app = express();
app.use(cors(corsOption));
app.use(bodyParser.json());

const AuthRoute = require("./routes/AuthRoute");
const FinanceRoute = require("./routes/FinanceRoute");
const ErrorRoute = require("./routes/ErrorRoute");

const { VerifyJWT } = require("./utilities/verifyAuth");

app.use("/v1/test", (req, res) => {
  res.status(200).json({ msg: "Test Route" });
});

app.use("/v1/auth", AuthRoute);
app.use("/v1/auth/finance", VerifyJWT, FinanceRoute);
app.use("/v1/*", ErrorRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Started at port: ${process.env.PORT}`);
});
