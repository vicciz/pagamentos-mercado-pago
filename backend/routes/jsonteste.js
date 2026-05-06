import express from "express";
// Importa o framework Express (usado pra criar o servidor)

const router = express.Router();
// Cria um "roteador"
// Ele serve pra organizar rotas separadas do server principal

router.get("/", (req, res) => {
  // Define uma rota do tipo GET
  // "/" significa: rota base desse arquivo
  // Ex: se no server estiver app.use("/teste-json", router)
  // então a rota final será: /teste-json

  console.log("📥 Requisição recebida em /teste-json");
  // Mostra no console que alguém acessou essa rota

  const sampleData = {
    name: "pinoquio",
    email: "123",
    telefone: "(89)1234-5689",
    sexo: "masculino",
    idade:"22",
    hobbies: ["futebol", "música", "programação"]
  };
  // Cria um objeto com dados (isso é o JSON que será enviado)

  console.log("📤 Enviando resposta:", sampleData);
  // Mostra no console o que está sendo enviado

  res.json(sampleData);
  // Envia a resposta em formato JSON para quem fez a requisição
  // O frontend vai receber isso no fetch

  if (sampleData.idade < 18) {
    console.warn("⚠️ Atenção: O usuário é menor de idade!");
    // Mostra um aviso no console se a idade for menor que 18
    res.json({ error: "Usuário menor de idade não permitido" });
    // Envia uma resposta de erro para o frontend
  }
});

export default router;
// Exporta esse router pra ser usado no server.js