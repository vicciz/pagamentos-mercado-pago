import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import boletoRoutes from "./routes/paymentBoleto.js";
import pixRoutes from "./routes/paymentPix.js";
import cartaoRoutes from "./routes/paymentCard.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ROTAS
app.use("/boleto", boletoRoutes);
app.use("/pix", pixRoutes);
app.use("/cartao", cartaoRoutes);

app.listen(3001, "0.0.0.0", () => {
  console.log("Servidor rodando em http://10.0.0.120:3001");
});