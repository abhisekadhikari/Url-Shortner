const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const MongoDB = async () => {
  try {
    const isConnect = await mongoose.connect(
      "mongodb://localhost:27017/Url_Shortner",
      { useNewUrlParser: true }
    );
    if (isConnect) {
      console.log("MongoDB Connected");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = MongoDB;
