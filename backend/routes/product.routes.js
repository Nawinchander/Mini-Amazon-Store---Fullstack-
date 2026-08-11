// /// Product API.

// const express = require("express");

// const router = express.Router();

// const productController = require("../controllers/product.controller");

// router.get("/", productController.getProducts);

// router.post("/", productController.addProduct);

// module.exports = router;



const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller");
const auth = require("../middleware/auth");

router.get("/", productController.getProducts);

router.post("/", auth, productController.addProduct);

module.exports = router;


// Now:

// GET /api/products
//         ↓
// Public

// POST /api/products
//         ↓
// JWT required

// This gives your project a nice interview talking point: authentication middleware protects write operations while read operations remain public.



