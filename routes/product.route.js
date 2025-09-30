const express = require("express");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js'); // Import all required functions

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct); // Fixed route (removed ":id" from POST)
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
