module.exports.ErrorHandleController = async (req, res, next) => {
  console.log(req);
  res.status(400).json({ err: "Something went wrong" });
};
