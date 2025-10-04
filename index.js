// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// // Caminho para a pasta build do React
const buildPath = path.join(__dirname, "build");

// // Servir arquivos estáticos (JS, CSS, imagens, etc.)
app.use(express.static(buildPath));

// // Rota catch-all para retornar o index.html do React
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
});
  
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
