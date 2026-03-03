const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

// GET
router.get('/', getProducts);
router.get('/:id', getProduct);

// POST
router.post('/', createProduct);

// PUT
router.put('/:id', updateProduct);

// DELETE
router.delete('/:id', deleteProduct);

module.exports = router;
