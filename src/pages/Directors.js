import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors,setDirectors]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/Directors")
    .then(response => response.json())
    .then(data => {setDirectors(data);
    console.log(data)})
    .catch(error => console.error(error));
  },[]);

  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((item)=>(
          <article>
            <h2>
              {item.name}
            </h2>
            <li>
              {item.movies}
            </li>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
