import React from 'react'
import './Contact.css'
import Header from '../Header/Header';
import contact from "../images/Contact-1.jpg";

const Contact = () => {
  return (
    <div>
      <Header />
      <div
        data-bs-spy="scroll"
        ta-bs-target="#list-example"
        // data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      >
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={contact} className="w-100" height={500} alt="image1" />
              <div class="carousel-caption d-block">
                <h1 className="Contact">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section-1">
        <div className="container">
          <p className="text-left text-primary fs-4 mt-5">Contact Us</p>
        </div>
      </div>

      <div className="contact_list mt-5 mb-5">
        <div className="container">
          <div className="d-flex">
            <div className="telephone col-3">
              {/* <div className='rounded'></div> */}
              <i className="bi bi-telephone-fill ms-5 fs-1"></i>
              <p className="number fs-5">+234 708 184 9841</p>
            </div>
            <div className="email-2 col-5">
              <div className="email-3">
                <i className="bi bi-envelope-fill ms-5 fs-1"></i>
              </div>
              <p className="email-address fs-5">
                bazechristianfellowship95@gmail.com
              </p>
            </div>
            <div className="location">
              <div className="location-1">
                <i className="bi bi-geo-alt-fill ms-5 fs-1"></i>
              </div>
              <p className="location-2 fs-5">
                {" "}
                Plot 686, Cadastral Zone C 00, Jabi Airport Road Bypass (Ring
                Road), Behind National Judicial Institute, Abuja
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us mt-5">
        <div className="container">
          {/* <p className="text-left text-primary fs-4">Contact</p> */}
          {/* <div className="row"> */}
          <div className="Contact-us">
            <div className="row">
              <h1 className="text-left get">
                Get in touch <br />
                with us
              </h1>
              <ul className="contact-list contact-section d-flex">
                <li className="phone-no" href="#">
                  <i className="bi bi-telephone-fill me-3"></i>
                </li>
                <li className="email ms-3" href="/">
                  <i className="bi bi-envelope-fill me-3"></i>
                </li>
                <li className="whatsapp ms-3" href="/">
                  <i className="bi bi-whatsapp me-1"></i>
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
      </div>
      <div className="Map mt-5">
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
      </div>
    </div>
  );
}

export default Contact
