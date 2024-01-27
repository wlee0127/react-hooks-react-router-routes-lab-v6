import "./index.css";
import React from "react";
import Home from "./pages/Home.js";
import Actors from "./pages/Actors.js";
import Directors from "./pages/Directors.js";
import Movie from "./pages/Movie.js";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/ErrorPage";
import routes from "routes.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import routes from "./routes";

const router=createBrowserRouter(routes);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
