
const Boleto = () => {
    return (
        <div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', padding: '2rem'}}>  
            <h2>Pagamento com Boleto Bancário</h2>
            <p>Insira os dados para gerar o boleto:</p>
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" />
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <button style={{marginTop: '1rem'}}>Gerar Boleto</button>
        </div>
    );
}

export default Boleto;