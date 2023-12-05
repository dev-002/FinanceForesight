const jwt = require("jsonwebtoken");

module.exports.VerifyJWT = async (req, res, next) => {
  if (req.token) {
    const data = jwt.verify(req.token, process.env.TOKEN);
    if (data) {
      console.log("JWT verified", jwt);
      next();
    } else return res.status(200).json({ err: "JWT token Expired" });
  }
};
