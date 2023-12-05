const express = require("express");
const FinanceController = require("../controller/FinanceController");
const router = express.Router();

router.get("/", FinanceController.DisplayFinance);
router.post("/create", FinanceController.CreateFincance);
router.get("/suggest", FinanceController.SuggestFinance);

module.exports = router;
