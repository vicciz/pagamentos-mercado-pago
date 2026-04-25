import { useEffect } from "react";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";

const Cartao = () => {

  useEffect(() => {
    initMercadoPago("APP_USR-efbc1a9a-dceb-4ab0-abdf-0d0a1ce9a4ab"); // 🔥 sua public key

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

        const response = await fetch("http://localhost:3001/criar-pagamento", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: data.token
          })
        });

        const result = await response.json();
        console.log(result);
  }}
/>
    </div>
  );
};

export default Cartao;