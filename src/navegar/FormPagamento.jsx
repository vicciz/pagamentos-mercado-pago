import { useState } from "react";

import Cartao from "./modals/cartao";
import Boleto from "./modals/boleto";
import Pix from "./modals/pix";


function FormPagamento() {
  const [modal, setModal] = useState(null);

  return (
    <>
    <div style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <button style={{ marginBottom: '1rem' }} onClick={() => setModal("cartao")}>
        Cartão
      </button>

      <button style={{ marginBottom: '1rem' }} onClick={() => setModal("boleto")}>
        Boleto
      </button>

      <button style={{ marginBottom: '1rem' }} onClick={() => setModal("pix")}>
        Pix
      </button>

  

      {/* MODAIS */}
      {modal === "cartao" && <Cartao fechar={() => setModal(null)} />}
      {modal === "boleto" && <Boleto fechar={() => setModal(null)} />}
      {modal === "pix" && <Pix fechar={() => setModal(null)} />}
      
    </div>
    </>
  );
}

export default FormPagamento;