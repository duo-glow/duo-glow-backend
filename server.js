require("dotenv").config();

const express = require("express");
const cors = require("cors");
const supabase = require("./supabase");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/productos", async (req, res) => {
  const { categoria } = req.query;

  let query = supabase.from("productos").select("*").order("id", { ascending: true });

  if (categoria) {
    query = query.ilike("categoria", categoria);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error consultando Supabase:", error.message);
    return res.status(500).json({ error: "No se pudieron obtener los productos" });
  }

  res.json(data);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


