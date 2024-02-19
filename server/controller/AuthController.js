const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.LoginController = async (req, res, next) => {
  const { user: userBody } = req.body;
  console.log(req.body);
  if (userBody) {
    const user = await UserModel.findOne({
      email: userBody.email,
    });
    if (user) {
      if (bcrypt.compare(userBody.password, user.password)) {
        const token = jwt.sign({ name: user.username }, process.env.TOKEN, {
          expiresIn: "1d",
        });
        return res.status(200).json({
          msg: "User Successfully Logged in",
          verified: true,
          user,
          token,
        });
      } else
        return res
          .status(200)
          .json({ msg: "Incorrect Password", verified: false });
    } else
      return res.status(404).json({ msg: "No User Found", verified: false });
  } else {
    return res.status(400).json({ err: "No Login Data Provided" });
  }
};

exports.RegisterController = async (req, res, next) => {
  const { user: userBody } = req.body;
  if (userBody) {
    const hashPass = await bcrypt.hash(userBody.password, 10);
    const register = new UserModel({ ...userBody, password: hashPass });
    await register.save();
    return res.status(201).json({ msg: "Successfully Registerd", userBody });
  } else {
    return res.status(400).json({ err: "No Login Data Provided" });
  }
};
