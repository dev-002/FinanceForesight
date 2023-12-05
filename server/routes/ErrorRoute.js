const express = require("express");
const {
  ErrorHandleController,
} = require("../controller/ErrorHandleController");

const router = express.Router();

router.get("/", ErrorHandleController);

module.exports = router;
