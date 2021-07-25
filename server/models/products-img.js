const mongoose = require("mongoose");

const ProductImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

const ProductimageModel = mongoose.model("product-image", ProductImageSchema);
module.exports = ProductimageModel;
