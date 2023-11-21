const express = require("express");
const AuthController = require("../controller/AuthController");
const router = express.Router();

router.post("/login", AuthController.LoginController);
router.post("/register", AuthController.RegisterController);

module.exports = router;
