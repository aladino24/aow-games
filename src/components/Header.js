import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={process.env.PUBLIC_URL + "/src/aow-grup.jpg"} alt="Rick and Morty" width="50" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isOpen ? "show" : ""} collapse navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/lobby/">
                Lobby
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/player/">
                Player
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episode/">
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-location/">
                Riwayat
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link className="nav-link" to="/login">
              Login Member
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
