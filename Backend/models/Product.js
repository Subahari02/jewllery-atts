/// File: models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  description: String,
  category: String,
  manufacturingDate: Date,
  image: String,
});

module.exports = mongoose.model('Product', productSchema);

