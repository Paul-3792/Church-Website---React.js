import React from 'react'
import './About.css'
import Header from '../Header/Header'
import Aboutimage from "../images/About.jpg";
// import Footer from '../Footer/Footer';

const About = () => {
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
              <img src={Aboutimage} className="w-100" height={500} alt="image1" />
              <div class="carousel-caption d-block">
                <h1 className='About-header-text'>About Us</h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <p className="text-left text-primary fs-4 mt-5">About Us</p>
          <h1 className="text-left">Who we are</h1>
          <p className="text-left" id="welcome_statement">
            We’re so glad you’ve found your way here. At Baze Christian
            Fellowship, we are a community of believers passionate about Growth,
            Service and Love. If you’re in search of a place to belong, we
            invite you to join us on this journey. Come as you are, but prepare
            to be transformed! You can explore our website to learn more about
            how you can get involved. Welcome home.
          </p>
          {/* <button className="read-more">Read More</button> */}
        </div>
      </div>
      <div className="weekly-activities mt-5">
        <div className="container">
          <p className="text-left text-primary fs-4">Weekly Activities</p>
          <h1 className="text-left">Join Our Weekly Activities</h1>
          <ul className="text-left fs-3 weekly_activities">
            <li>Sunday Love Service by 8:30am</li>
            <li>Worship Circle by 6:30pm on Sundays</li>
            <li>Prayer Meeting by 8pm on Tuesdays</li>
            <li>Bible Study by 6:30pm on Wednesday</li>
            <li>Cell Meeting (Hostel) by 6:30pm on Fridays</li>
            <li>Evangelism by 4pm on Saturday</li>
          </ul>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default About
