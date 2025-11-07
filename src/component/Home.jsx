import React from "react";
import logo from "../assets/logo/logo.png";
import BgVideo from "../assets/BGvideo.mp4"; // <-- your background video file

function Home({ id }) {
  return (
    <section id={id} className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        src={BgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-content">
        <div className="hero-card">
          <div className="logo-container">
            <img
              src={logo}
              alt="Uttar Bharat Udyog Expo Logo"
              className="hero-logo"
            />
          </div>

          <h1>THE GRAND LAUNCH OF LARGEST</h1>
          <div className="edition">
            STARTUPS, RENEWABLE ENERGY, ELECTRIC VEHICLE AND MANUFACTURING
            INDUSTRIES EXHIBITION
          </div>

          <h2>UTTAR BHARAT UDYOG EXPO 2026</h2>
          <p className="meta">
            21st - 22nd January, 2026 | Hotel Plasa, Muzaffarnagar, U.P., India
          </p>

          <div className="cta-row">
            <button className="btn primary">Visitor Registration</button>
            <button className="btn outline">Exhibitor Registration</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
