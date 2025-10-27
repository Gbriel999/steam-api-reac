import { useState, useEffect } from 'react';

function BuscadorPorNombre() {
  const [juegos, setJuegos] = useState([]);
  // input del buscador
  const [nombreJuego, setNombreJuego] = useState('');

  const urlApiPorNombre = 'https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamApps/GetAppList/v2/';

  // pregunta a la api
  const getData = async () => {
    try {
      const response = await fetch(urlApiPorNombre);
      const data = await response.json();
      setJuegos(data.applist.apps);
    } catch (error) {
      console.error('Error al obtener la lista de juegos: ', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const buscarNombre = () => {
    const juego = juegos.find(
      (j) => j.name.toLowerCase() === nombreJuego.toLowerCase()
    );
    
    if (juego) {
      alert(`El ID del juego es: ${juego.appid}`);
    } else {
      console.error('No se encontraron juegos con ese nombre.');
      alert('No se encontraron juegos con ese nombre.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nombreJuego}
        onChange={(e) => setNombreJuego(e.target.value)}
        placeholder="Nombre exacto del juego"
      />
      <button onClick={buscarNombre}>OBTENER ID POR NOMBRE</button>
    </div>
  );
}

export default BuscadorPorNombre;