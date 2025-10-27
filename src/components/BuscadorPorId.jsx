import { useState } from 'react'; 
import DetallesJuego from './DetallesJuego';

function BuscadorPorId() {
  const [detalles, setDetalles] = useState(null);
  const [idJuego, setIdJuego] = useState('');

  //regresa la respuesta de la ipi
  const obtenerJuegoPorId = async () => {
    // cors para que la pagina no muera
    const urlApiPorId = `https://cors-anywhere.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=${idJuego}`;

    try {
      const response = await fetch(urlApiPorId);
      const datos = await response.json(); 
      
      if (datos[idJuego] && datos[idJuego].success) {
        // actualizar los datos
        setDetalles(datos[idJuego].data);
      } else {
        console.error('No se encontraron datos para el ID:', idJuego);
        setDetalles(null);
      }
    } catch (error) {
      console.error('Error al obtener los datos del juego por ID: ', error);
    }
  };

  return (
    <div>
      <h1>Busca los precios de los juegos por ID</h1>
      
      {detalles && <DetallesJuego juego={detalles} />}

      <div>
        <input
          type="text"
          value={idJuego}
          onChange={(e) => setIdJuego(e.target.value)}
          placeholder="Ingresa ID del juego"
        />
        <button onClick={obtenerJuegoPorId}>BUSCAR POR ID</button>
      </div>
    </div>
  );
}

export default BuscadorPorId;