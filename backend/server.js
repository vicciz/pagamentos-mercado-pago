import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import listEndpoints from "express-list-endpoints";

import boletoRoutes from "./routes/paymentBoleto.js";
import pixRoutes from "./routes/paymentPix.js";
import cartaoRoutes from "./routes/paymentCard.js";
import jsonRoutes from "./routes/jsonteste.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* 🔥 LOG DE TODAS REQUISIÇÕES */
app.use((req, res, next) => {
  console.log(`📡 ${req.method} ${req.url}`);
  next();
});

/* 🔥 ROTAS */
app.use("/boleto", boletoRoutes);
app.use("/pix", pixRoutes);
app.use("/cartao", cartaoRoutes);
app.use("/teste-json", jsonRoutes);

/* 🔥 ROTA PRA LISTAR TODAS AS ROTAS */
app.get("/routes", (req, res) => {
  const endpoints = listEndpoints(app);

  console.log("📡 ROTAS REGISTRADAS:");
  endpoints.forEach((route) => {
    console.log(`${route.methods.join(", ")} ${route.path}`);
  });

  res.json(endpoints);
});

/* 🚀 START */
app.listen(3001, "0.0.0.0", () => {
  console.log("Servidor rodando em http://10.0.0.120:3001");
  console.log(process.env.MP_ACCESS_TOKEN);
});