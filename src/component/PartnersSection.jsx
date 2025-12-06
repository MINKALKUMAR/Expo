import React from "react";

const PartnersSection = () => {
  const mainBox = {
    backgroundColor: "#07130f",
    minHeight: "65vh",
    padding: "50px 0",
    color: "#d3e7de",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const heading = {
    fontSize: "40px",
    marginBottom: "20px",
    fontWeight: "700",
  };

  const subHeading = {
    fontSize: "22px",
    fontWeight: "600",
    margin: "25px 0 15px",
    color: "#2aa07a",
  };

  const rowBox = {
    display: "inline-flex",
    alignItems: "center",
    gap: "35px",
    padding: "25px 45px",
    backgroundColor: "white",
    borderRadius: "14px",
    margin: "auto",
    border: "2px solid #16a34a",
    filter: "drop-shadow(0 13px 21px rgba(102, 230, 153, 0.62))",
  };

  const logoStyle = {
    width: "90px",
    cursor: "pointer",
    transition: "0.3s",
  };

  const verticalLine = {
    width: "2px",
    height: "70px",
    backgroundColor: "#54fac6ff",
    borderRadius: "2px",
  };

  const boxLogo = {
    backgroundColor: "white",
    padding: "20px",
    width: "170px",
    borderRadius: "14px",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer",
    border: "2px solid #16a34a",
    filter: "drop-shadow(0 13px 21px rgba(102, 230, 153, 0.62))",
  };

  return (
    <div style={mainBox}>
      {/* ---------- MOBILE + TABLET CSS FIXES ---------- */}
      <style>
        {`
          @media (max-width: 1024px) {
            .rowBox {
              padding: 18px 25px !important;
              gap: 20px !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
              width: 80% !important;d
            }
            .logoStyle {
              width: 70px !important;
            }
            .verticalLine {
              display: none !important;
            }
            .boxLogo {
              width: 150px !important;
              padding: 15px !important;
            }
          }

          @media (max-width: 600px) {
            h1 {
              font-size: 28px !important;
            }
            h2 {
              font-size: 20px !important;
            }
            .rowBox {
              width: 90% !important;
              padding: 15px !important;
              gap: 15px !important;
              justify-content: center !important;
              width: 80% !important;
            }
            .logoStyle {
              width: 60px !important;
            }
            .boxLogo {
              width: 130px !important;
              padding: 12px !important;
            }
          }
        `}
      </style>

      <h1 style={heading}>Our Partners</h1>

      {/* ---------------- PREMIUM PARTNERS ---------------- */}
      <h2 style={subHeading}>Powered By</h2>
      <div className="rowBox" style={rowBox}>
        <img
          src="/welwitchia.png"
          className="logoStyle"
          style={logoStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          alt="logo"
        />
        <div className="verticalLine" style={verticalLine}></div>
        <img
          src="/welwitchia2.png"
          className="logoStyle"
          style={logoStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          alt="logo"
        />
      </div>

      {/* ---------------- CORPORATE PARTNERS ---------------- */}
      {/* <h2 style={subHeading}>Corporate Partners</h2>
      <div className="rowBox" style={rowBox}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className="logoStyle"
          style={logoStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          alt="logo"
        />
        <div className="verticalLine" style={verticalLine}></div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className="logoStyle"
          style={logoStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          alt="logo"
        />
        <div className="verticalLine" style={verticalLine}></div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className="logoStyle"
          style={logoStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          alt="logo"
        />
      </div> */}

      {/* ---------------- ASSOCIATE PARTNERS ---------------- */}
      {/* <h2 style={subHeading}>Associate Partners</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        {["Tech Partner", "Innovation Partner", "Digital Partner", "Growth Partner"].map(
          (title) => (
            <div
              key={title}
              className="boxLogo"
              style={boxLogo}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h4 style={{ marginBottom: "12px", color: "#0c1713", fontSize: "16px" }}>
                {title}
              </h4>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                className="logoStyle"
                style={logoStyle}
                alt="logo"
              />
            </div>
          )
        )}
      </div> */}
    </div>
  );
};

export default PartnersSection;
