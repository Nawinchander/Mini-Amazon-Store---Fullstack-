///// Receive Request → Call Service → Return Response

const productService = require("../services/product.service");

const getProducts = async (req, res) => {

    const products = await productService.getProducts();

    res.json(products);

};

const addProduct = async (req, res) => {

    const product = await productService.addProduct(req.body);

    res.json(product);

};

module.exports = { getProducts, addProduct };




