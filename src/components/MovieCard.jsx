function MovieCard({ movie }) {
  return (
    <img
      className="img-fluid"
      style={{ width: "100%", height: "auto" }}
      src={movie.Poster}
      alt={movie.Title}
      title={movie.Title}
    />
  );
}

export default MovieCard;
