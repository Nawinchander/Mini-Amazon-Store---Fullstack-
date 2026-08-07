/////  Purpose


///// Business Logic

const Product = require("../models/Product");

const getProducts = async () => {
    return await Product.find();
};

const addProduct = async (data) => {
    return await Product.create(data);
};

module.exports = { getProducts, addProduct };





