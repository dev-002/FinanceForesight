const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const financeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },

  financialGoals: {
    type: [{ goal: Number, name: String }],
    required: true,
    default: {},
  },
  totalSaving: {
    type: Number,
    default: 0,
  },
  monthlySaving: {
    type: Number,
    required: true,
    default: 0,
  },
  monthlyIncome: {
    type: [{ income: Number, source: String }],
    required: true,
    default: [],
  },

  monthlyExpenses: {
    type: [{ expense: Number, reason: String }],
    required: true,
    default: [],
  },

  monthlyInvestmentReturn: {
    type: [{ return: Number, source: String }],
    default: [],
  },
});

module.exports = mongoose.model("finance", financeSchema);
