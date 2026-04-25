import express from "express";

const router = express.Router();

router.post("/criar-boleto", async (req, res) => {
  try {
    const { email, first_name, last_name, cpf, amount } = req.body;

    if (!email || !cpf || !amount) {
      return res.status(400).json({
        ok: false,
        error: "Dados obrigatórios faltando",
      });
    }

    console.log("BODY RECEBIDO:", req.body);

    const response = await fetch("https://api.mercadopago.com/v1/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "X-Idempotency-Key": "boleto-" + Date.now(),
      },
      body: JSON.stringify({
        transaction_amount: Number(amount),
        description: "Pagamento via boleto",
        payment_method_id: "bolbradesco",
        payer: {
          email,
          first_name,
          last_name,
          identification: {
            type: "CPF",
            number: cpf,
          },
        },
      }),
    });

    const data = await response.json();

    console.log("STATUS:", response.status);
    console.log("RESPOSTA MP:", data);

    if (!response.ok) {
      return res.status(400).json({
        ok: false,
        error: data,
      });
    }

    return res.json({
      ok: true,
      boleto_url: data.transaction_details?.external_resource_url,
      linha_digitavel: data.barcode?.content,
      status: data.status,
    });

  } catch (err) {
    console.error("ERRO:", err);

    return res.status(500).json({
      ok: false,
      error: "Erro interno no servidor",
    });
  }
});

export default router;