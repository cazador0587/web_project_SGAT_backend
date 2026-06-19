const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError" || err.name === "CastError") {
    return res.status(400).send({
      message: "Datos inválidos",
    });
  }

  const { statusCode = 500, message } = err;

  return res.status(statusCode).send({
    message: statusCode === 500 ? "Error interno del servidor" : message,
  });
};

module.exports = errorHandler;
