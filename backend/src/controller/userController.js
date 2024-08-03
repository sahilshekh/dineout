const User = require('../modules/userModel');
const jwt = require('jsonwebtoken');

//post route for user register
// const router = express.Router();

const register = async (req, res) => {
    // const { name, email } = req.body;

    try {
        const user = await User.create(req.body);

        return res.status(200).send(user);
    } catch (error) {


        return res.json({ status: "error register" });

    }
};
const login = async (req, res) => {
    const { phone } = req.body;
    try {
        const user = await User.findOne({ phone }).lean().exec();
        if (!user) return res.status(404).send({ status: "error", message: "user not found" })
        //compare jwt
        const token = jwt.sign({ _id: user._id }, "secret", { expiresIn: "12h" });
        return res.status(200).send({ token, user });

    } catch (error) {
        return res.json({ status: "error", error: "Invalid username or password there" });
    }
};

const getOne = async (req, res) => {
    try {
        const items = await User.findById(req.params.id).lean().exec();

        return res.status(201).send(items)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
}


module.exports = { register, login };