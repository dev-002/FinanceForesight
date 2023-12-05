const jwt = require("jsonwebtoken");
const Finance = require("../model/FinanceModel");
const Suggest = require("../utilities/Suggest");

exports.DisplayFinance = async (req, res, next) => {
  try {
    const data = await Finance.find();
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ msg: "Data Fetching Failed", error });
  }
};

exports.CreateFincance = async (req, res, next) => {
  try {
    const data = await Finance.findOne();
    const update = await Finance.findOneAndUpdate({}, { ...data, ...req.body });
    await update.save();
    res.status(201).json({ msg: "Data Updated Successfully", update });
  } catch (error) {
    return res.status(400).json({ msg: "Data Updation Failed", error });
  }
};

exports.SuggestFinance = async (req, res, next) => {
  try {
    const token_data = jwt.verify(req.token, process.env.TOKEN);
    if (token_data) {
      const data = Finance.findOne({ userId: token_data.id });
      if (data) {
        const suggestion = await Suggest(data);
        return res.status(200).json({ suggestion });
      } else return res.status(404).json({ error: "No Finance Record Found" });
    } else
      return res
        .status(400)
        .json({ error: "JWT token validation Failed from Suggest Page" });
  } catch (error) {
    return res.status(400).json({ error: "Suggestion Failed", error });
  }
};
