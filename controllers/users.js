const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET = "dev-secret" } = process.env;

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hash,
    });

    return res.status(201).send({
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    if (error.code === 11000 || error.name === "MongoServerError") {
      return res.status(409).send({
        message: "El correo electrónico ya está registrado",
      });
    }

    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).send({
        message: "Correo o contraseña incorrectos",
      });
    }

    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return res.status(401).send({
        message: "Correo o contraseña incorrectos",
      });
    }

    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: "7d" });
    return res.send({ token });
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    return res.send(user);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
  login,
  getCurrentUser,
};
