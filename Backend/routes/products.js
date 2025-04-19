/// File: routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');
const { body, validationResult } = require('express-validator');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/', upload.single('image'), [
  body('name').notEmpty(),
  body('price').isNumeric(),
  body('stock').isInt(),
  body('description').notEmpty(),
  body('category').notEmpty(),
  body('manufacturingDate').isISO8601(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, price, stock, description, category, manufacturingDate } = req.body;
  const image = req.file?.filename || '';

  const product = new Product({ name, price, stock, description, category, manufacturingDate, image });
  await product.save();
  res.json(product);
});

router.put('/:id', upload.single('image'), async (req, res) => {
  const updates = req.body;
  if (req.file) updates.image = req.file.filename;
  const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true });
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;