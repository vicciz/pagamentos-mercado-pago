import { useEffect } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";

export default function Cartao() {

 useEffect(() => {

  initMercadoPago(
    import.meta.env.VITE_MP_PUBLIC_KEY
  );

}, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem"
    }}>
      <h2>Pagamento com Cartão</h2>

      <CardPayment
        initialization={{ amount: 200 }}
        locale="pt-BR"
        onSubmit={async (data) => {
        console.log("TOKEN:", data.token);

        const response = await fetch("http://10.0.0.120:3001/cartao", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: data.token,
            payment_method_id: data.payment_method_id,
            payer: data.payer
          })
        });

        const result = await response.json();
        console.log(result);
  }}
/>
    </div>
  )

}