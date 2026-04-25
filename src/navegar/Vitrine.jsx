import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


//Criar a entidade produto com as seguintes propriedades: id, nome, preco, descricao e imagem.  
const produto = {
  id: 1,
  nome: 'jarra de vidro',
  preco: 10.00,
  descricao: 'Descrição do produto 1',
  imagem: 'src/assets/jarra.jpg'
}


//Função de compra
function Vitrine() {

  function comprarProduto() {
    navigate('/FormCompra') //redireciona para a tela de formulário de compra
  }
  const navigate = useNavigate()
  return (
    <div className="App" style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', padding: '2rem'}}>
      <h1>{produto.nome}</h1>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p>{produto.descricao}</p>
      <img style={{ width: '50%', height: 'auto', margin: '1rem auto' }} src={produto.imagem} alt={produto.nome} />
      
      <button style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }} onClick={comprarProduto}>
        Comprar
      </button>
    </div>
  )
}

export default Vitrine