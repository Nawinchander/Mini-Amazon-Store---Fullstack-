import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const getProducts = () => {
    return API.get("/products");
};

export const loginUser = () => {
    return API.post("/auth/login");
};

export const addProduct = (product) => {
    return API.post("/products", product);
};


