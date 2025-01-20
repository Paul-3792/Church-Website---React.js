import React from 'react'
import './Home.css'
import Header from '../Header/Header';
import Image1 from '../images/Baze-1.jpeg';
import Image2 from '../images/Image (2).jpg';
import Image3 from '../images/Image (3).jpg';

const Home = () => {
  return (
    <div>
      <Header />
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Image1} className="w-100 carousel-image"  height={600} alt="..."/>
      <div class="carousel-caption d-block d-md-block">
        <h2>WELCOME TO</h2>
        <h3>BAZE CHRISTIAN FELLOWSHIP</h3>
      </div>
    </div>
  </div>
</div>


      <section className="about-section">
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
          <button className="read-more">
            <a href="/about" className="read-more-about">
              Read More
            </a>{" "}
          </button>
        </div>
      </section>
      <section className="weekly-activities mt-5">
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
      </section>
      <section className="contact-us mt-5">
        <div className="container">
          <p className="text-left text-primary fs-4">Contact</p>
          {/* <div className="row"> */}
          <div className="Contact-us">
            <div className="row">
              <h1 className="text-left get">
                Get in touch <br />
                with us
              </h1>
              <ul className="contact-list contact-section d-flex">
                <li className="phone-no">
                  <a href="tel:+2347081849841">
                    <i className="bi bi-telephone-fill me-3 text-dark"></i>
                  </a>
                </li>
                <li className="email ms-3">
                  <a href="mailto:bazechristianfellowship95@gmail.com">
                    <i className="bi bi-envelope-fill me-3 text-dark"></i>
                  </a>
                </li>
                <li className="whatsapp ms-3">
                  <a href="https://wa.link/7qxlta">
                    <i className="bi bi-whatsapp me-1 text-dark"></i>
                  </a>
                </li>
              </ul>
            </div>

            <form
              className="contact-section mb-3"
              action="https://formspree.io/f/xannadja"
              method="POST"
            >
              <div className="d-flex">
                <div className="input-group-1">
                  {/* <span className="input-group-text-1 me-2 text-dark">
                    Name
                  </span> */}
                  <input
                    type="text"
                    name="Name"
                    className="form-control-1 bg-transparent"
                    placeholder="Full Name..."
                    required
                  />
                </div>
                <div className="input-group-1">
                  {/* <span className="input-group-text-1 bg-transparent text-dark me-2">
                    Phone Number
                  </span> */}
                  <input
                    type="tel"
                    name="phone-number"
                    className="form-control-2 bg-transparent"
                    placeholder="Enter Phone-Number..."
                    required
                  />
                </div>
              </div>
              <div class="mt-3 mb-3">
                {/* <label for="message" className="form-label">
                  Message
                </label> */}
                <textarea
                  class="form-control"
                  name="Message"
                  id="message"
                  rows="5"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="button-submit">
                  Send
                </button>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </section>
      <section className="Map mt-5">
        <div className="container">
          <div style={{ width: "100%", height: "400px" }}>
            <iframe
              title="Baze Christian Fellowship"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.616184048572!2d7.401402973752433!3d9.007419089329005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7372f6739429%3A0x6f4a97b0f79f5221!2sBaze%20University%20Chapel!5e0!3m2!1sen!2sng!4v1735648243985!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              // className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
