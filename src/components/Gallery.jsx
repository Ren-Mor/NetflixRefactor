import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = "6808602a";

function MovieGallery({ title, queryList }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    Promise.all(
      queryList.map((query) =>
        fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
            query
          )}`
        ).then((res) => {
          if (!res.ok) {
            throw new Error(`Errore nella risposta: ${res.status}`);
          }
          return res.json();
        })
      )
    )
      .then((results) => {
        const validMovies = results.filter(
          (movie) => movie.Response === "True"
        );
        setMovies(validMovies);
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        setError("Impossibile caricare i dati. Riprova più tardi.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [queryList]);

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    );
  }

  return (
    <>
      <h4 className="text-white mt-4">{title}</h4>
      <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-6">
        {movies.map((movie, index) => (
          <div className="col mb-2 text-center px-1" key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieGallery;
