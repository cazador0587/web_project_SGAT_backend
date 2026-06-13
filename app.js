const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const { PORT = 3000, MONGODB_URI = "mongodb://127.0.0.1:27017/sgatdb" } =
  process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar con MongoDB:", error);
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "API SGAT funcionando correctamente" });
});

app.listen(PORT, () => {
  console.log(`Servidor SGAT escuchando en puerto ${PORT}`);
});
