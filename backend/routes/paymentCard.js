import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    console.log(req.body);

    const {
      token,
      payment_method_id,
      payer
    } = req.body;

    const response = await fetch(
      "https://api.mercadopago.com/v1/payments",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          "X-Idempotency-Key": "abc-" + Date.now()
        },

        body: JSON.stringify({

          transaction_amount: 200,

          token: token,

          description: "JARRA DE VIDRO",

          installments: 1,

          payment_method_id: payment_method_id,

          payer: {
            email: payer.email,

            identification: {
              type: "CPF",
              number: payer.identification.number
            }
          }

        })

      }
    );

    const data = await response.json();

    console.log(data);

    res.json(data);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      erro: "Erro ao processar pagamento"
    });

  }

});

export default router;