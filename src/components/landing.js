import React  from "react";
import "../styles/landing.css";
import why from "../assets/img/hero-img.png";



const landing = () => {
  return ( 
<div>
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-8 mr-2" />
        <h1 className="logo me-auto"><a href="/">Attendance Management System</a></h1>
           <nav id="navbar" className="navbar">
                <ul>
                  {/* <li><a className="nav-link scrollto active" href="/">HOME</a></li>
                  <li><a className="nav-link scrollto" href="/about">ABOUT</a></li> */}
                  <li><a className="getstarted scrollto" href="/login">GET STARTED</a></li>
                </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
      </div>
    </header>

  <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Better Solutions For Your Business</h1>
            <h2>An employee attendance monitoring system helps HR department to see who is clocked in and at what time. You can be sure that you only pay your employees for the time they work. Employee attendance system gives an accurate picture of the organization's labor cost.</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="/about" className="btn-get-started scrollto">More Info</a>
            </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={why} className="img-fluid animated" alt="" />
        </div>
      </div>
  </div>
</section>

{/* <footer id="footer">
     <div className="copyright">
        &copy; Copyright <strong><span>SOLVIT AFRICA</span></strong>. All Rights Reserved
     </div>

     <div className="credits">
        Designed by Group 14
      </div>
</footer> */}

</div>
  
 
   );
}
 
export default landing;