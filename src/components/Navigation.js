import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Mytitle } from "../components/Montitre"

const Navigation = () => {
  const location = useLocation();
  const [pageName, setPageName] = useState("");
  const { id } = useParams();
  const isOkay = useContext(Mytitle);

  const getPageName = () => {
    if (location.pathname === "/") {
      setPageName("Accueil");
    } else if (location.pathname === "/about") {
      setPageName("A propos");
    } else if (location.pathname === "/contact") {
      setPageName("Nous contacter");
    } else if (location.pathname === "/menu") {
      setPageName("Menu");
    } else if (location.pathname === "/menu/" + id) {
      <span>{ setPageName(isOkay) }</span>;
    }
  };

  useEffect(() => {
    getPageName();
  }, [isOkay]);

  return (
    <div className="navigation">
      <ul className="">
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="pagename">
        <h1>{pageName}</h1>
      </div>
    </div>
  );
};

export default Navigation;
