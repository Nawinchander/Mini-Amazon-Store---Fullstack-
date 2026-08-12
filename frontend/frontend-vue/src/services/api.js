import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const loginUser = () => {
    return API.post("/auth/login");
};

export const getProducts = () => {
    return API.get("/products");
};

export const addProduct = (product) => {

    const token = localStorage.getItem("token");

    return API.post(
        "/products",
        product,
        {
            headers: {
                Authorization: token
            }
        }
    );
};

export default API;



// Why do we need this?

// Instead of writing Axios code inside every Vue component:

// Login.vue
// Dashboard.vue
// ProductCard.vue

// we keep API communication in one place:

// services/
// └── api.js


