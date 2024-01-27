import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar";

function Home() {

  const [moviesData, setMoviesData]=useState(null);



  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then(response => response.json())
    .then(data => {setMoviesData(data);
    console.log(data)})
    .catch(error => console.error(error));
  },[]);



  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        <h1>Home Page</h1>
        {moviesData ? (
          moviesData.map((item)=>(
            <MovieCard key={item.id} movieTitle={item.title}/>
            ))
        ):(<p>loading...</p>)
        }
      </main>
    </>
  );
};

export default Home;
