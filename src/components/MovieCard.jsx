function MovieCard({ movie }) {
  return (
    <img
      className="img-fluid"
      style={{
        width: "100%",
        height: "auto",
        /*Questo in commento è la parte che dimensiona le immagini esattamente come nel progetto precedente. 
        La ho commentata perchè non mi piace che si taglino le immagini
        width: "250px",
        height: "140px",
        objectFit: "cover",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",*/
      }}
      src={movie.Poster}
      alt={movie.Title}
      title={movie.Title}
    />
  );
}

export default MovieCard;
