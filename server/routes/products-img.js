const { response } = require("express");
const express = require("express");
const router = express.Router();
const Image = require("../models/products-img");

router.post("/image-upload-product", function (req, res) {
  try {
    let imageUrl = req.body.imageUrl;
    if (imageUrl) {
      Image.create({ imageUrl })
        .then((img) => {
          return res.json({
            message: "Image Uploaded successfully",
          });
        })
        .catch(() => {
          return res.status(500).json({
            message: "Something went wrong",
          });
        });
    } else
      return res.status(500).json({
        message: "Image URL Undefined",
      });
  } catch (e) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

router.get("/products-images", function (req, res) {
  try {
    Image.find().then((images) => {
      return res.json({ images });
    });
  } catch (e) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
