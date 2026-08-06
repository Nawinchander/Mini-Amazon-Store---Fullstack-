require("dotenv").config();

const app = require("./app");

const connectMongo = require("./config/mongo");
const connectSQL = require("./config/db");

const PORT = process.env.PORT || 5000;

connectMongo();
connectSQL();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

