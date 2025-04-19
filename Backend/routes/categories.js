/// File: routes/categories.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/autocomplete', async (req, res) => {
  const query = req.query.q || '';
  const categories = await Product.find({ category: { $regex: query, $options: 'i' } }).distinct('category');
  res.json(categories);
});

module.exports = router;