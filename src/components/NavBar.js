import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/Actors"
        /* add styling to Navlink */
        className="nav-link"
      >
        Actors
      </NavLink>
      <NavLink
        to="/Directors"
        /* add styling to Navlink */
        className="nav-link"
      >
        Directors
      </NavLink>
      <NavLink
        to="/movies"
        /* add styling to Navlink */
        className="nav-link"
      >
        Movies
      </NavLink>
    </nav>
    );
};

export default NavBar;
