const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const MongoDB = async () => {
  try {
    const isConnect = await mongoose.connect(
      "mongodb://localhost:27017/Url_Shortner",
      { useNewUrlParser: true }
    );
    if (isConnect) {
      console.warn("MongoDB Connected");
    }
  } catch (error) {
    console.warn(error.message);
  }
};

module.exports = MongoDB;
