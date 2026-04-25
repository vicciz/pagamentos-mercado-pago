import express from "express";

const router = express.Router();

router.post("/criar-pix", async (req, res) => {
  try {
    const { email, amount } = req.body;

    if (!email || !amount) {
      return res.status(400).json({
        ok: false,
        error: "Email e amount são obrigatórios",
      });
    }

    const response = await fetch(
      "https://api.mercadopago.com/v1/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          "X-Idempotency-Key": `pix-${Date.now()}`,
        },
        body: JSON.stringify({
          type: "online",
          total_amount: Number(amount),
          external_reference: `pedido-${Date.now()}`,
          processing_mode: "automatic",
          transactions: {
            payments: [
              {
                amount: Number(amount),
                payment_method: {
                  id: "pix",
                  type: "bank_transfer",
                },
              },
            ],
          },
          payer: {
            email,
          },
        }),
      }
    );

    const data = await response.json();

    console.log("STATUS PIX:", response.status);
    console.log("RESPOSTA PIX:", data);

    // ❌ erro vindo do Mercado Pago
    if (!response.ok) {
      return res.status(400).json({
        ok: false,
        error: data,
      });
    }

    // ✅ sucesso padronizado
    return res.json({
      ok: true,
      pix: data,
    });

  } catch (err) {
    console.error("ERRO PIX:", err);

    return res.status(500).json({
      ok: false,
      error: "Erro interno ao gerar PIX",
    });
  }
});

export default router;