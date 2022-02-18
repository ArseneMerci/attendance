import React, { Component } from "react";
import "../styles/landing.css";
import why from "../assets/img/skills.png";

export default class Login extends Component {
    render() {
        return (
            <div>
              
            <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">
        <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-8 mr-2" alt="Windster Logo" />
            <h1 class="logo me-auto"><a href="/">Attendance Management System</a></h1>
      <a href="index.html" class="logo me-auto"><img src="../assets/img/logo.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li style={{marginLeft:'100vh',fontSize:'14px',textAlign:'center'}}><a href="/">HOME</a></li>
        </ul>
        
      </nav>
    </div>
  </header>

  
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>About the System</h1>
            <h2>In a good attendance management system, your employees can mark their time and attendance in the mobile app. The software automates your attendance management, so the data should be available to the HR department in real-time to do the precise payroll and your employees should be compensated for their time.<br></br>
            You can generate reports based on the different parameters in our attendance management software. You don’t need to make the reports manually anymore. All you have to do is select the parameters such as late remarks, shift details, and punches that you want whenever you need to make reports.</h2>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={why} class="img-fluid animated" alt="" />
          </div>
      </div>
    </div>
  </section>
      <div id="footer">
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright <strong><span>Solvit Africa</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by Group 14
          </div>
        </div>
      </div>
  </div>
        );
    }
}