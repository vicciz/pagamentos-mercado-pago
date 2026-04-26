import { useNavigate } from "react-router-dom";

function Vitrine() {
  const navigate = useNavigate();

  function comprarProduto() {
    navigate("/FormCompra");
  }

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <h1>{produto.nome}</h1>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p>{produto.descricao}</p>

      <img
        style={{ width: "200px", height: "200px", margin: "1rem auto" }}
        src={produto.imagem}
        alt={produto.nome}
      />

      <button
        style={{ padding: "0.5rem 1rem", fontSize: "1rem", cursor: "pointer" }}
        onClick={comprarProduto}
      >
        Comprar
      </button>
    </div>
  );
}

export default Vitrine;