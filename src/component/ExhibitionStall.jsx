import React from "react";

export default function ExhibitionStall() {
  const container = {
    backgroundColor: "#0c1713",
    width: "100%",
    minHeight: "80vh",
    padding: "80px 5%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    position: "relative",
    boxSizing: "border-box",
    flexWrap: "wrap",
  };

  const leftContent = {
    width: "45%",
    minWidth: "300px",
    color: "white",
    zIndex: 2,
  };

  const smallHeading = {
    fontSize: "18px",
    letterSpacing: "2px",
    color: "#4ade80",
    marginBottom: "10px",
    textTransform: "uppercase",
  };

  const mainHeading = {
    fontSize: "3vw",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "25px",
    lineHeight: "1.2",
  };

  const bulletList = {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "15px 40px",
  };

  const bulletItem = {
    fontSize: "18px",
    margin: "12px 0",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#e5e7eb",
  };

  const checkIcon = {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    background: "#4ade80",
    color: "#0c1713",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
  };

  const rightImageWrapper = {
    width: "50%",
    minWidth: "320px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "700px",
    height: "auto",
    borderRadius: "15px",
    position: "relative",
    top: "-230px",
    right: "30px",
    filter: "drop-shadow(0 25px 40px rgba(255, 255, 255, 0.4))",
    transition: "0.3s",
  };

  // ⭐ MOBILE RESPONSIVE FIXES (CLEANED & CORRECTED)
  const mobileCSS = `
    @media (max-width: 768px) {

      /* Center all content on mobile */
      .stall-container {
        flex-direction: column;
        padding: 12vw 5% 10vw;
        text-align: center !important;
        align-items: center !important;
      }

      .left-content {
        width: 100%;
      }

      .small-heading {
        font-size: 4vw !important;
      }

      .main-heading {
        // font-size: 7vw !important;
        text-align: center;
      }

      .bullet-item {
        font-size: 4vw !important;
        justify-content: center;
      }

      .right-wrapper {
        width: 100%;
        margin-top: -20vw;
        display: flex;
        justify-content: center;
      }

      .stall-image {
        width: 80vw !important;
        max-width: 90vw;
        top: -12vw !important;
        right: 0 !important;
      }
    }

    @media (max-width: 480px) {
      .main-heading {
        font-size: 8vw !important;
      }
      .stall-image {
        width: 85vw !important;
        top: -10vw !important;
      }
    }
  `;

  return (
    <>
      <style>{mobileCSS}</style>

      <div style={container} className="stall-container">
        
        {/* LEFT SIDE CONTENT */}
        <div style={leftContent} className="left-content">
          <div style={smallHeading} className="small-heading">
            EACH 2x2 SQUARE FEET
          </div>

          <h1 style={mainHeading} className="main-heading">
            Shell Scheme Stall Includes
          </h1>

          <ul style={bulletList}>
            {[
              "1 TABLE",
              "2 CHAIRS",
              "1 DUSTBIN",
              "2 SPOTLIGHT",
              "5 AMP POWER PLUG POINT",
              "OCTONORM WALL STRUCTURE",
              "FASCIA WITH COMPANY NAME",
              "WALL TO WALL CARPET",
            ].map((item, i) => (
              <li key={i} style={bulletItem} className="bullet-item">
                <span style={checkIcon}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div style={rightImageWrapper} className="right-wrapper">
          <img
            src="/ExhibitionStall.png"
            alt="Exhibition Booth"
            style={imageStyle}
            className="stall-image"
          />
        </div>
      </div>
    </>
  );
}
