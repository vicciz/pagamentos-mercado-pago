import { useState } from "react";

export default function Boleto() {
  const [form, setForm] = useState({
    payerFirstName: "",
    payerLastName: "",
    email: "",
    identificationNumber: "",
  });

  const [boletoData, setBoletoData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const gerarBoleto = async () => {
    try {
      setLoading(true);
      setBoletoData(null); // limpa anterior

      const response = await fetch(
        "http://10.0.0.120:3001/boleto/criar-boleto",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            first_name: form.payerFirstName,
            last_name: form.payerLastName,
            cpf: form.identificationNumber,
            amount: 100,
          }),
        }
      );

      const data = await response.json();

      console.log("RESPOSTA DO BACKEND:", data);

      if (!response.ok || data.ok === false) {
        alert("Erro ao gerar boleto");
        return;
      }

      setBoletoData(data);
    } catch (err) {
      console.error("Erro de rede:", err);
      alert("Erro de conexão com servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Pagamento via Boleto</h2>

      <input
        name="payerFirstName"
        placeholder="Nome"
        onChange={handleChange}
      />

      <input
        name="payerLastName"
        placeholder="Sobrenome"
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="identificationNumber"
        placeholder="CPF"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={gerarBoleto} disabled={loading}>
        {loading ? "Gerando..." : "Gerar Boleto"}
      </button>

      {/* RESULTADO */}
      {boletoData && (
        <div style={{ marginTop: 20 }}>
          <h3>✔ Boleto gerado com sucesso</h3>

          {boletoData.boleto_url && (
            <a
              href={boletoData.boleto_url}
              target="_blank"
              rel="noreferrer"
            >
              Abrir boleto
            </a>
          )}

          {boletoData.linha_digitavel && (
            <div style={{ marginTop: 10 }}>
              <p>Linha digitável:</p>
              <input
                value={boletoData.linha_digitavel}
                readOnly
                style={{ width: "100%" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}