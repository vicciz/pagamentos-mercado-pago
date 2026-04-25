import express from "express";
import cors from "cors";
import pagamentoRoutes from "./routes/paymentProcess.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// sua rota
app.use("/paymentProcess", pagamentoRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});