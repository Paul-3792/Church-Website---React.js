import React from 'react'
import './Departments.css'
import Header from "../Header/Header";
import Department from "../images/Department-2.jpg";

const Departments = () => {
  return (
    <div>
      <Header />
      <div data-bs-spy="scroll"
        
        ta-bs-target="#list-example"
        // data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example"
        tabindex="0"
      >
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Department} className="w-100" height={500} alt="image1" />
              <div class="carousel-caption d-block">
                <h1>Departments</h1>
                <p>
                  You can contact any of these numbers to join any department
                  you are interested in.
                </p>
                {/* <br /> */}
                <p>Contacts: 08126725841, 07081849841</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="department-section">
        <div className="container">
          <p className="text-left text-primary fs-4 mt-5">Deparments</p>
          <p className="text-left text-dark fs-5">
            Below are the following departments
          </p>
          <ul className="text-left fs-4 departments_list">
            <li className="department-name">Media Department</li>
            <li className="department-name">Choir Department</li>
            <li className="department-name">Sanctuary Department</li>
            <li className="department-name">Prayer Department</li>
            <li className="department-name">Help Desk Department</li>
            <li className="department-name">Ushering Department</li>
            <li className="department-name">Drama Department</li>
            <li className="department-name">Instrumentalist Department</li>
            <li className="department-name">Bible Study Department</li>
            <li className="department-name">Cell Meeting Department</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Departments
