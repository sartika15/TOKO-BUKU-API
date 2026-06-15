const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/v1/buku",
  require("./src/routes/buku.routes")
);

app.use(
  "/api/v1/pembelian",
  require("./src/routes/pembelian.routes")
);

app.use(
  "/api/docs",
  require("./src/routes/docs.routes")
);

module.exports = app;
