import React, { useState } from 'react';

function Cadastro() {
    const [planoSelecionado, setPlanoSelecionado] = useState('');

    const selecionarPlano = (plano) => {
        setPlanoSelecionado(plano);
    }
    const assinarPlano = () => {
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const endereco = document.getElementById('endereco').value;
        const nomeCartao = document.getElementById('nomeCartao').value;
        const numeroCartao = document.getElementById('numeroCartao').value;
        const cvc = document.getElementById('cvc').value;
    
        const objetoAssinatura = {
          nome: nome,
          telefone: telefone,
          endereco: endereco,
          nomeCartao: nomeCartao,
          numeroCartao: numeroCartao,
          cvc: cvc,
          plano: planoSelecionado
        };
    
        console.log(objetoAssinatura);
      }
    return (
        <div className="container border p-3">
            <h1 className="text-center">Cadastro</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" className="form-control" id="nome" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="Number" className="form-control" id="telefone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" className="form-control" id="endereco" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="nomeCartao">Nome do cartão:</label>
                        <input type="text" className="form-control" id="nomeCartao" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numeroCartao">Número do cartão:</label>
                        <input type="text" className="form-control" id="numeroCartao" maxLength="20" pattern="\d*" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cvc">CVC:</label>
                        <input type="password" className="form-control" id="cvc" maxLength="3" />
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-6">
                    <h3>Plano Escolhido:</h3>
                </div>
                <div className="col-md-6">
                    <div className="btn-group">
                        <button type="button" className={`btn ${planoSelecionado === 'Free' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => selecionarPlano('Free')}>Free</button>
                        <button type="button" className={`btn ${planoSelecionado === 'Plus' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => selecionarPlano('Plus')}>Plus</button>
                    </div>
                </div>
            </div>

            <div className="row mb-2 h-100 align-items-center">
                <button type="button" className="btn btn-primary col-6 mx-auto" onClick={assinarPlano}>Assinar</button>
            </div>

        </div>
    );
}

export default Cadastro;
