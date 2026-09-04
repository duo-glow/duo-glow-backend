const express = require("express");
const cors = require("cors");
const productos = require("./data/productos.json");

const app = express();

app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/productos", (req, res) => {
  const { categoria } = req.query;
  let resultado = productos;

  if (categoria) {
    resultado = productos.filter(
      (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  res.json(resultado);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
