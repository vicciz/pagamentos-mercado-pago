import express from "express";

const router = express.Router();

router.post("/criar-pagamento", async (req, res) => {
  try {
    const { token } = req.body;

    const response = await fetch("https://api.mercadopago.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "X-Idempotency-Key": "abc-" + Date.now()
      },
      body: JSON.stringify({
        type: "online",
        processing_mode: "automatic",
        total_amount: "200.00",
        external_reference: "pedido-123",
        payer: {
          email: "test@testuser.com"
        },
        transactions: {
          payments: [
            {
              amount: "200.00",
              payment_method: {
                type: "credit_card",
                token: token,
                installments: 1
              }
            }
          ]
        }
      })
    });

    const data = await response.json();

    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao processar pagamento" });
  }
});

export default router;