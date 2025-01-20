import React from 'react'
import './Audio.css'
import Header from '../Header/Header';
import Choir from "../images/Choir-minstration-cover.jpg";
import Audiopicture from "../images/Audio.jpg";
import Audio1 from "../Recordings/Baze Choir's Ministration.MP3";

const Audio = () => {
  return (
    <div>
      <Header />
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        // data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      >
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Audiopicture}
                className="w-100"
                height={500}
                alt="image1"
              />
              <div class="carousel-caption d-block">
                <h1>Audio</h1>
                <p className="fs-4">
                  You can listen to our audio recordings down below
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="audio-section">
        <div className="container">
          <p className="text-left text-primary fs-4 mt-5">Audio</p>
          <div className="d-flex mt-5">
            <div className="audio-image me-5 mb-5 me-5">
              <img
                src={Choir}
                className="img-fluid"
                width={400}
                height={500}
                alt="Choir Ministration"
              />
            </div>
            <div className="audio-record ms-5">
              <h3>Baze Voice</h3>
              <audio controls>
                <source src={Audio1} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audio
