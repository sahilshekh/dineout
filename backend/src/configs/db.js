const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://newDineout:Pass%40123@dineout.uy43k.mongodb.net/test");
}
