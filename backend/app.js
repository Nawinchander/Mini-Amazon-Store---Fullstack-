const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Mini Amazon API Running"
    });
});


app.use("/api/products", productRoutes);

app.use("/api/auth", authRoutes);

module.exports = app;


