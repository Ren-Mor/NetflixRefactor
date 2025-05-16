import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = "6808602a"; // API key

function MovieGallery({ title, queryList }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Promise.all(
      queryList.map((query) =>
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${query}`).then(
          (res) => res.json()
        )
      )
    ).then(setMovies);
  }, [queryList]);

  return (
    <>
      <h4 className="text-white mt-4">{title}</h4>
      <div className="row row-cols-1 row row-cols-sm-2 row row-cols-md-3 row-cols-lg-3 row-cols-xl-6 mt-3 p-1">
        {movies.map((movie, index) => (
          <div className="col mb-2 text-center px-2" key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieGallery;
