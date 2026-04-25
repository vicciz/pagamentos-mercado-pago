import { useState } from "react";

export default function Pix() {
  const [form, setForm] = useState({
    payerFirstName: "",
    payerLastName: "",
    email: "",
    identificationType: "",
    identificationNumber: "",
  });

  const [pixData, setPixData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const gerarPix = async () => {
    try {
      setLoading(true);
      setPixData(null);

      const response = await fetch(
        "http://10.0.0.120:3001/pix/criar-pix",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            amount: 100,
          }),
        }
      );

      const data = await response.json();

      console.log("RESPOSTA PIX:", data);

      // ❌ ERRO DO BACKEND
      if (!response.ok || data.ok === false) {
        alert("Erro ao gerar PIX");
        return;
      }

      // ✅ sucesso
      setPixData(data.pix);

    } catch (err) {
      console.error(err);
      alert("Erro de conexão");
    } finally {
      setLoading(false);
    }
  };

  const copiarPix = () => {
    if (!pixData?.qr_code) return;

    navigator.clipboard.writeText(pixData.qr_code);
    alert("PIX copiado!");
  };

  return (
    <div>
      <h2>Pagamento via PIX</h2>

      <input name="payerFirstName" placeholder="Nome" onChange={handleChange} />
      <input name="payerLastName" placeholder="Sobrenome" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />

      <br /><br />

      <button onClick={gerarPix} disabled={loading}>
        {loading ? "Gerando..." : "Gerar PIX"}
      </button>

      {/* RESULTADO */}
      {pixData && (
        <div style={{ marginTop: 20 }}>
          <h3>PIX gerado</h3>

          {/* QR CODE */}
          {pixData.point_of_interaction?.transaction_data?.qr_code_base64 && (
            <img
              src={`data:image/png;base64,${
                pixData.point_of_interaction.transaction_data.qr_code_base64
              }`}
              width={200}
              alt="QR Code PIX"
            />
          )}

          {/* COPIA E COLA */}
          {pixData.point_of_interaction?.transaction_data?.qr_code && (
            <div>
              <p>Copia e cola:</p>
              <input
                value={pixData.point_of_interaction.transaction_data.qr_code}
                readOnly
                style={{ width: "100%" }}
              />

              <button onClick={copiarPix}>Copiar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}