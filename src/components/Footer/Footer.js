import React from 'react'
import './Footer.css'
import Logo from '../images/BAZE CHAPEL LOGO.png';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="...">
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* <div className="..."> */}
            <div className="col-6 baze-logo mt-2">
              <img
                src={Logo}
                className="img-fluid"
                width={200}
                height={200}
                alt="Logo"
              />
              <p className="mt-2 col-6 text-white">
                We’re so glad you’ve found your way here. At Baze Christian
                Fellowship, we are a community of believers passionate about
                Growth, Service and Love.
              </p>
            </div>
            <div className="col-4 mt-5">
              <h3 className="text-white">Explore</h3>
              <ul className="explore_list mt-2 text-white">
                <li className="home">
                  <a href="/" className="footer-links2">
                    Home
                  </a>
                </li>
                <li className="about">
                  <a href="/about" className="footer-links2">
                    About
                  </a>
                </li>
                <li className="audio">
                  <a href="/audio" className="footer-links2">
                    Audio
                  </a>
                </li>
                <li className="department">
                  <a href="/department" className="footer-links2">
                    Department
                  </a>
                </li>
                <li className="contact">
                  <a href="contact" className="footer-links2">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col mt-5">
              <h3 className="text-white">Location</h3>
              <p className="text-white">
                <i className="bi bi-geo-alt-fill"></i> Plot 686, Cadastral Zone
                C 00, Jabi Airport Road Bypass (Ring Road), Behind National
                Judicial Institute, Abuja
              </p>
            </div>
            <div className="col mt-5">
              <h3 className="text-white">Contact</h3>
              <ul className="text-white contact-list">
                <li>
                  <i className="bi bi-telephone-fill"></i> +234 7072358083
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i> opara1487@gmail.com
                </li>
              </ul>
            </div>
            <div className="col mt-5">
              <h3 className="text-white">Socials</h3>
              <ul className="explore_list mt-2 text-white">
                <li className="home">
                  <a
                    href="https://www.instagram.com/bazechristianfellowship/profilecard/?igsh=MTVoZXhmazFkcWd1MA=="
                    className="footer-links2"
                  >
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </li>
                <li className="about">
                  <a
                    href="https://youtube.com/@bazechristianfellowship?si=7e2mk5pEM1an7ZS-"
                    className="footer-links2"
                  >
                    <i className="bi bi-youtube"></i> Youtube
                  </a>
                </li>
              </ul>
            </div>
            {/* </div> */}
            <hr />
            <p className="text-white fs-5 text-center">
              © All Copyright 2024 by Baze Christian Fellowship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
