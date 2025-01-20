import React from 'react'
import './Donate.css'
import Header from "../Header/Header";
import Donate2 from '../images/Donate.jpg';
import Donate1 from "../images/Donate1.png";

const Donate = () => {
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
                src={Donate2}
                className="w-100"
                height={500}
                alt="image1"
              />
              <div class="carousel-caption d-block">
                <h1>Donate</h1>
                <p className="fs-4">
                  You can listen to our audio recordings down below
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='donate-section'>
        <di className='container'>
            <p className='text-left text-primary fs-4 mt-5 ms-5'>Donate</p>
            <div className='ms-5'>
                <img src={Donate1} className='img-fluid mb-5' width={500} height={500} alt='offering'/>
            </div>
        </di>
      </div>
    </div>
  );
}

export default Donate
