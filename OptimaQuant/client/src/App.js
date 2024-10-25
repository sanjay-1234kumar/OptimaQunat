import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactForm from "./contact";
function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">OptimaQuant Capital</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#technology">Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#careers">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero text-light text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-4">Where Speed Meets Strategy</h1>
          <p className="lead">Pioneering mid-frequency trading solutions for sustainable growth.</p>
          <a href="#contact" className="btn btn-lg btn-light mt-3">Get in Touch</a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5 text-light bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="./img/i2.jpg" alt="About Us" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h2>About OptimaQuant Capital</h2>
              <p>At OptimaQuant Capital, we blend cutting-edge algorithms, data-driven strategies, and technology to deliver consistent, risk-adjusted returns in global markets.</p>
              <p>Our team of quantitative analysts and engineers ensures our models stay at the forefront of innovation.</p>
              <a href="#services" className="btn btn-outline-light mt-3">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <img src="./img/i5.webp" className="card-img-top" alt="Mid-Frequency Trading" />
                <div className="card-body">
                  <h5 className="card-title">Mid-Frequency Trading</h5>
                  <p className="card-text">Capturing market opportunities with speed and precision.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img src="./img/i4.webp" className="card-img-top" alt="Algorithm Development" />
                <div className="card-body">
                  <h5 className="card-title">Algorithm Development</h5>
                  <p className="card-text">Proprietary algorithms adapted to evolving market conditions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <img src="./img/i3.webp" className="card-img-top" alt="Risk Management" />
                <div className="card-body">
                  <h5 className="card-title">Risk Management</h5>
                  <p className="card-text">Robust frameworks to manage volatility and protect capital.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-5 text-light bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>The Technology Behind OptimaQuant</h2>
              <p>Our tech stack includes low-latency trading infrastructure and machine learning models, providing optimal performance in global markets.</p>
              <p>We continually refine our systems to maintain scalability and precision.</p>
            </div>
            <div className="col-lg-6">
              <img src="./img/i6.webp" alt="Technology" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Join Our Team</h2>
          <p className="text-center">Explore our open positions and build the future of trading with us.</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Quantitative Analyst</h5>
                  <p className="card-text">Develop and refine trading algorithms for dynamic markets.</p>
                 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Algorithmic Trader</h5>
                  <p className="card-text">Execute trades using proprietary algorithms.</p>
                 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Software Engineer</h5>
                  <p className="card-text">Develop the technological backbone of our trading systems.</p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Us Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p>&copy; { new Date().getFullYear()} OptimaQuant Capital. All rights reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#" className="text-light">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#" className="text-light">Terms of Service</a></li>
            <li className="list-inline-item"><a href="#" className="text-light">Careers</a></li>
          </ul>
          <p className="small">Follow us on:</p>
          <div>
            <a href="https://www.linkedin.com/company/optimaquant-capital" className="text-light me-3"><i className="fab fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

