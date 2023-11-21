const mongoose = require("mongoose");

module.exports.connect_func = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then((con) =>
      console.log(
        `Database connection: host: ${con.connection.host} port: ${con.connection.port} name: ${con.connection.name}`
      )
    )
    .catch((err) => console.log(err));
};
