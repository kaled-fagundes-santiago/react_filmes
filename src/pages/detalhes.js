import React, { useState, useEffect } from 'react';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';
import Assistido from '../components/Buttons/button_assistir';

function Detalhes(props) {
  const { id } = props;
  console.log(id);
  const [filme, setFilme] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const apiUrl = `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar o filme');
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setFilme(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return (
      <center>
        <div>
          <img
            src="https://www.blogson.com.br/wp-content/uploads/2017/10/loading-gif-transparent-10.gif"
            alt="Loading..."
            style={{
              width: '100px',
              height: '100px',
              animation: 'spin 2s linear infinite'
            }}
          />
          <center><p>Loading...</p></center>
        </div>
      </center>
    );
  }

  if (!filme) {
    return (
      <>
        <Title title="Filme não encontrado" text="" />
        <p>O filme que você está procurando não foi encontrado.</p>
      </>
    );
  }

  return (
    <>
      <Title title={filme.titulo} text="" />
      <div className="container" key={id}>
        <div className="row mt-3">
          <div className="col-md-6 text-center">
            <img src={filme.poster} alt={filme.titulo} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{filme.titulo}</h2>
            <p>Ano: {filme.ano}</p>
            <p>Nota: {filme.nota}</p>
            <p>sinopse: {filme.sinopse}</p>
            <Assistido javisto={filme.assistido} />

            <hr />
            <div className="row mt-3">
          <div className="col-md-12" >
            <Comments filme={filme.titulo} />
          </div>
        </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Detalhes;