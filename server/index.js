const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected!!");
    const PORT = app.get("port");
    app.listen(PORT, console.log("server is running on port:" + PORT));
  })
  .catch((err) => console.log(err));
