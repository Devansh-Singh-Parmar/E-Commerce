const { response } = require("express");
const express = require("express");
const router = express.Router();
const Image = require("../models/products-img");

router.post("/image-upload-product", function (req, res) {
  try {
    let reqImageUrl = req.body.imageUrl;
    // if (imageUrl) {
    //   const newImage = new Image({
    //     imageUrl: reqImageUrl
    //   })
    //   newImage.save((err,result) => {
    //     if (err){
    //       res.status(500).json({message: "something went wrong"});
    //       console.log(err);
    //     }else{
    //       console.log(result)
    //     }
    // })
    if (reqImageUrl) {
      Image.create({ imageUrl: reqImageUrl })
        .then(() => {
          return res.json({ message: "Image Uploaded successfully" });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({
            message: "Something went wrong line 30",
          });
        });
    } else return res.status(500).json({ message: "Image URL Undefined" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Something went wrong line 33" });
  }
});

router.get("/products-images", function (req, res) {
  try {
    Image.find().then((images) => {
      return res.json({
        images,
      });
    });
  } catch (e) {
    return res.status(500).json({
      message: "Something went wrong 49",
    });
  }
});

module.exports = router;
