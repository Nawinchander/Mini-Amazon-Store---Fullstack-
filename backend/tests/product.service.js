const Product = require("../models/Product");

const getProducts = async () => {

    return Product.find();

};




