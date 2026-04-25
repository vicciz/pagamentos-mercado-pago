import { useNavigate } from 'react-router-dom';

const FormularioCompra = () => {
  const navigate = useNavigate();
  return (

    <div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', padding: '2rem'}}> 
        <h1>Formulário de Compra</h1>
        <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome"  />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"  />
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco"  />
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf"  />
            
            <h1>Endereço de Entrega</h1>
            <label htmlFor="rua">Rua:</label>
            <input type="text" id="rua" name="rua"  />
            <label htmlFor="numero">Número:</label> 
            <input type="text" id="numero" name="numero"  />
            <label htmlFor="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro"  />
            <label htmlFor="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade"  />
            <label htmlFor="estado">Estado:</label>
            <input type="text" id="estado" name="estado"  />
            <label htmlFor="cep">CEP:</label>
            <input type="text" id="cep" name="cep"  />
            <label htmlFor="referencia">Ponto de Referência:</label>
            <input type="text" id="referencia" name="referencia"  />
            <button onClick={()=> navigate("/formPagamento")} type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>
                Finalizar Compra
            </button>
            //após finalizar a compra o usuario é redirecionado a tela de pagamento        </form>
    </div>
  );
};

export default FormularioCompra;