import React, { useState } from "react";

const TesteDeJson = () => {
    const [dados, setDados] = useState(null);
    const [erroIdade, setErroIdade] = useState(false);

    function validarTelefone(telefone) {
        const telefoneLimpo = telefone.replace(/\D/g, "");
        return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11;
    }

    function testeJson() {
        fetch("http://10.0.0.120:3001/teste-json")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // valida telefone
                if (!data.telefone || !validarTelefone(data.telefone)) {
                    alert("Telefone inválido");
                    setDados(null);
                    return;
                }

                // valida idade
                if (data.idade < 18) {
                    setErroIdade(true);
                    setDados(null);
                } else {
                    setErroIdade(false);
                    setDados(data);
                }
            })
            .catch(error => {
                console.error("Erro:", error);
            });
    }

    return (
        <div>
            <h1>Teste de JSON</h1>

            <button onClick={testeJson}>
                Buscar JSON
            </button>

            {/* ❌ menor de idade */}
            {erroIdade && (
                <h2 style={{ color: "red" }}>
                    Usuário menor de idade não permitido
                </h2>
            )}

            {/* ✅ maior de idade */}
            {!erroIdade && dados && (
                <div>
                    <h2 style={{ color: "green" }}>
                        Usuário permitido
                    </h2>

                    <p>Nome: {dados.name}</p>
                    <p>Idade: {dados.idade}</p>
                    <p>Sexo: {dados.sexo}</p>
                    <p>Telefone: {dados.telefone}</p>

                    {dados.hobbies && (
                        <ul>
                            {dados.hobbies.map((hobby, index) => (
                                <li key={index}>{hobby}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default TesteDeJson;