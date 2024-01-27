
import Home from "./pages/Home.js";
import Actors from "./pages/Actors.js";
import Directors from "./pages/Directors.js";
import Movie from "./pages/Movie.js";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
},
{
    path: "/actors",
    element: <Actors/>,
    errorElement: <ErrorPage/>
},
{
    path: "/directors",
    element: <Directors/>,
    errorElement: <ErrorPage/>
},
{
    path: "/movies/id",
    element: <Movie/>,
    errorElement: <ErrorPage/>
}
  ];

export default routes;