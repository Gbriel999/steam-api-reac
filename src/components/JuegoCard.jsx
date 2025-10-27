
function JuegoCard({ juego }) {
  const imageUrl = `https://cdn.cloudflare.steamstatic.com/steam/apps/${juego.appid}/header.jpg`;

  return (
    <div className="tarjeta-juego">
      <h4>{juego.name}</h4>
      <p>ID: {juego.appid}</p>
      <img src={imageUrl} alt={juego.name} className="imagen-juego" />
    </div>
  );
}

export default JuegoCard;