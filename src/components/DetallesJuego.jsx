function DetallesJuego({ juego }) {
  const precio = juego.price_overview 
    ? juego.price_overview.final_formatted 
    : 'Gratis';

  return (
    <div id="detalles-juego">
      <h2>{juego.name}</h2>
      <img src={juego.header_image} alt={juego.name} className="imagen-juego" />
      <p>
        <strong>Precio:</strong> {precio}
      </p>
    </div>
  );
}

export default DetallesJuego;