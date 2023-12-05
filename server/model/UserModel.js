const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  finance: { type: Schema.Types.ObjectId, ref: "finance" },
});

module.exports = new mongoose.model("user", userSchema);
