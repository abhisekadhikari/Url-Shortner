const route = require("express").Router();
const Schema = require("../Model/Schema");
const shortId = require("shortid");
route.get("/", async (req, res) => {
  const allUrl = await Schema.find({});
  res.render("index", {
    allUrl,
  });
});

route.post("/post", async (req, res) => {
  const { originalUrl } = req.body;
  try {
    if (!originalUrl) {
      return res
        .status(404)
        .json({ status: "Error", message: "Fill All The Fields" });
    }
    const shortedUrl = shortId.generate();
    const newUrl = new Schema({
      originalUrl,
      shortedUrl,
    });
    const result = newUrl.save();
    if (!result) {
      return res.status(400).json({
        status: false,
        message: "There is an error while storing the data",
      });
    }
    res.status(200).json({ status: true, message: "URL Sorted Successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

route.get("/:url", async (req, res) => {
  const isFound = await Schema.findOne({ shortedUrl: req.params.url });
  if (!isFound) {
    return res.status(404).send("</h1>404 Page</h1>");
  }
  isFound.clicks++;
  isFound.save();
  res.redirect(isFound.originalUrl);
  res.status(200);
});

route.get("*", (req, res) => {
  res.send("</h1>404 Page</h1>");
});

module.exports = route;
