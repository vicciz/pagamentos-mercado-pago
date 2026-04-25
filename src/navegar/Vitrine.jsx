import { useNavigate } from "react-router-dom";

const produto = {
  id: 1,
  nome: "jarra de vidro",
  preco: 10.0,
  descricao: "Descrição do produto 1",
  imagem: "https://imgs.search.brave.com/zpHUEIAM-XL_Bl1gZvd1zCoJ43GmPDTQxoE9j-OicWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg5/NTIwODgvcHQvZm90/by9nbGFzcy1waXRj/aGVyLW9mLXdhdGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0wTldxcTNudWZW/cXBqUjRFZE1leDlm/czJncUJERVJ1ZHh6/UHBsYzhSRXF3PQ",
};

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
        style={{ width: "50%", height: "auto", margin: "1rem auto" }}
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