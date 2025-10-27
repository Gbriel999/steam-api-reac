import { useState, useEffect } from 'react';
import JuegoCard from './JuegoCard';

function ListaJuegos() {
  const [juegosAleatorios, setJuegosAleatorios] = useState([]);
  const urlApi = 'https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamApps/GetAppList/v2/';

  // juego random
  function obtenerJuegosAleatorios(juegos, cantidad) {
    let mezclados = juegos.sort(() => 0.5 - Math.random());
    return mezclados.slice(0, cantidad);
  }

  // consulta
  const consultarApiJuegos = async () => {
    try {
      const respuesta = await fetch(urlApi);
      const datos = await respuesta.json();
      const juegos = datos.applist.apps;
      const aleatorios = obtenerJuegosAleatorios(juegos, 30);
      setJuegosAleatorios(aleatorios);
    } catch (error) {
      console.error('Error al obtener los datos de la API: ', error);
    }
  };

  useEffect(() => {
    consultarApiJuegos();
  }, []); 

  return (
    <div>
      <h1>30 Juegos Aleatorios para ti</h1>
      <div id="contenedor-juegos">
        {juegosAleatorios.map((juego) => (
          <JuegoCard key={juego.appid} juego={juego} />
        ))}
      </div>
    </div>
  );
}

export default ListaJuegos;