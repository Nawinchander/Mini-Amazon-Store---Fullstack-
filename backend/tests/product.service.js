const Product = require("../models/Product");

const getProducts = async () => {

    return Product.find();

};


const createProduct = async (product) => {

    return Product.create(product);

};

module.exports = {
    getProducts,
    createProduct
};

// we can test it without actually using the Express route.


