const express = require("express");
const cors = require("cors");

const app = express();

const connect = require("./configs/db");
const productController = require("./controller/productControler");

const starController = require("./controller/starController");
const northIndiaController = require("./controller/northindiacontroller");
const chineseController = require("./controller/chineseController");
const fastFoodController = require("./controller/fastFoodController");
const { register, login } = require("./controller/userController");

app.use(cors());
app.use(express.json());
app.use("/star", starController);
app.use("/northindia", northIndiaController);
app.use("/chinese", chineseController);
app.use("/fastfood", fastFoodController);

const dineoutController = require("./controller/dineoutController");
const pureVegController = require("./controller/pureVegController");
const buffetController = require("./controller/buffetController");

app.use("/products", productController);
app.use("/dineout", dineoutController);
app.use("/pureveg", pureVegController);
app.use("/buffet", buffetController);
app.post("/register", register);
app.post("/login", login);

app.listen(process.env.PORT || 5500, async () => {
    try {
        await connect();
        console.log("Listening on port 5500");
    } catch (error) {
        console.error("Error:", error.message);
    }
});

module.exports = app; // Export the app for serverless functions
