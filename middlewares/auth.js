const jwt = require("jsonwebtoken");
const { JWT_SECRET = "dev-secret" } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({
      message: "Autorización requerida",
    });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = payload;

    return next();
  } catch (error) {
    return res.status(401).send({
      message: "Token inválido",
    });
  }
};
