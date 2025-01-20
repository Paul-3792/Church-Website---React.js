import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import Logo from '../images/BAZE CHAPEL LOGO.png'
import Home from '../Home/Home';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <img
            src={Logo}
            className="img-fluid"
            width={100}
            height={100}
            alt="logo"
          />
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/audio">
                  Audio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/department">
                  Department
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <button className="dtn-btn ms-5">
                <Link className="donate-link" to="/donate">
                  Donate <i className="bi bi-heart-fill text-white"></i>
                </Link>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
