import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors,setActors]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/Actors")
    .then(response => response.json())
    .then(data => {setActors(data);
    console.log(data)})
    .catch(error => console.error(error));
  },[]);

  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((item)=>(
          <article>
            <h2>{item.name}</h2>
            <li>{item.movies}</li>
          </article>

        ))}
      </main>
    </>
  );
};

export default Actors;
