import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error));
  }, [movieId]);

  const moviegenres=movie.genres || [];

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {moviegenres.map((item)=>(
          <span>
            {item}
          </span>
        ))}
      </main>
    </>
  );
};

export default Movie;
