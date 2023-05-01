import './card.css';
import Modal from 'react-bootstrap/Modal';
import Detalhes from '../../pages/detalhes';
import Assistido from '../Buttons/button_assistir';

import React, { useState, useEffect } from 'react';

export default function Card() {
  console.log("card");

  const [idFilme, setId] = useState(0);
  const handleShowModal = (idFilme) => {
    setId(idFilme);
    setShowModal(true);
  };

  const [filmes, setFilmes] = useState(null);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('titulo');
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (event) => setSearch(event.target.value);
  const handleSortByChange = (event) => setSortBy(event.target.value);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const apiUrl = `https://my-json-server.typicode.com/marycamila184/movies/movies?${search ? `${sortBy}_like=${search}&` : ''
      }_sort=${sortBy}&_order=${sortBy === "titulo" ? 'asc' : 'desc'}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setFilmes(data))
      .catch((err) => console.error(err));
  }, [search, sortBy]);

  if (!filmes) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="container text-center">
      <div className="row mb-2 h-100 align-items-center">
        <div className="col-12">

          <div className="row " id='Pesquisa'>

            <div className="col">
              <label className="form-label">pesquisa:</label>

              <input type="text" className="form-control" value={search} onChange={handleSearchChange} />
            </div>
            <div className="col-auto">
              <label className="form-label">Ordenar Por:</label>
              <select className="form-select" value={sortBy} onChange={handleSortByChange}>
                <option value="titulo">Titulo</option>
                <option value="ano">Ano</option>
                <option value="nota">Nota</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      <div className="row">
        {filmes.map((filme, i) => (
          i < 3 && (
            <div className="col" key={filme.id} >
              <div className="card">
                <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">
                    {filme.titulo} - ({filme.ano})
                  </h5>
                  <p>{filme.nota}</p>
                  
                  <Assistido javisto={filme.assistido} />

                    <button onClick={() => handleShowModal(filme.id)}>Ver Descrição</button>

                    {showModal && (
                      <Modal show={showModal} onHide={handleCloseModal} size="xl" className="modal-xl">
                        <Modal.Header closeButton>
                          <Modal.Title>Detalhes do Filme</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Detalhes id={idFilme} />
                        </Modal.Body>
                      </Modal>
                    )}

                 
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
