import React from "react";
import logo from "../assets/Fintrex.png"; // ✅ adjust path if needed (e.g., './assets/logo.png')

export default function AboutOrganizer() {
  return (
    <div style={styles.container}>
      {/* Animated Background */}
      <div style={styles.backgroundWrapper}>
        <div style={styles.circle1}></div>
        <div style={styles.circle2}></div>
        <div style={styles.circle3}></div>
        <div style={styles.gridPattern}></div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.mainHeading}>ABOUT ORGANIZER</h1>

          {/* Logo */}
          <div style={styles.logoWrapper}>
            <div style={styles.logoCard}>
              <img
                src={logo}
                alt="Eventage Logo"
                style={styles.logoImage}
              />
              <p style={styles.logoSubtitle}>
                EXHIBITIONS | CONFERENCES | EVENTS
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={styles.descriptionWrapper}>
          <p style={styles.paragraph}>
            <span style={styles.bold}>
              EVENTAGE TRADE FAIR & EVENTS PVT. LTD.
            </span>{" "}
            is a new generation exhibition company which brings in fresh
            perspectives on opportunity creation through exhibitions. We seek to
            create business events which cater to the needs of both new age
            startups based on technology as well as traditional industries.
          </p>

          <p style={styles.paragraph}>
            Team Eventage is set to transform the way B2B exhibitions are
            perceived. Our portfolio of events include B2B exhibitions, global
            trade shows, summits, forums, buyer-seller meetings and inbound &
            outbound trade missions across the globe to create trade and
            investment opportunities.
          </p>

          <p style={styles.paragraph}>
            Founded by the visionary team of industry experts with over two
            decades of rich experience in B2B exhibitions, Business Events and
            Publications across industry segments globally.
          </p>
        </div>

        {/* Decorative Lines */}
        <div style={styles.decorLine1}></div>
        <div style={styles.decorLine2}></div>
      </div>

      <style>{keyframes}</style>
    </div>
  );
}

const keyframes = `
  @keyframes pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.05); }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, rgb(0 0 0) 0%, rgb(17 85 63) 50%, rgb(6 25 20) 100%)",
    overflow: "hidden",
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  backgroundWrapper: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  },
  circle1: {
    position: "absolute",
    top: "80px",
    left: "40px",
    width: "256px",
    height: "256px",
    background:
      "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(60px)",
    animation: "pulse 4s ease-in-out infinite",
  },
  circle2: {
    position: "absolute",
    bottom: "80px",
    right: "40px",
    width: "384px",
    height: "384px",
    background:
      "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(60px)",
    animation: "pulse 4s ease-in-out infinite 1s",
  },
  circle3: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "320px",
    height: "320px",
    background:
      "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(60px)",
    animation: "pulse 4s ease-in-out infinite 0.5s",
  },
  gridPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(to right, rgba(16, 185, 129, 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
    `,
    backgroundSize: "64px 64px",
  },
  content: {
    position: "relative",
    zIndex: 10,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "64px 24px",
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  mainHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: "0.05em",
    marginBottom: "64px",
    animation: "fadeIn 0.8s ease-in-out",
    textShadow: "0 2px 10px rgba(16, 185, 129, 0.3)",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "48px",
    animation: "fadeInUp 0.8s ease-in-out 0.2s backwards",
  },
  logoCard: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "32px",
    borderRadius: "16px",
    boxShadow:
      "0 20px 60px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(16, 185, 129, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoImage: {
    width: "180px", // ✅ adjust size as needed
    height: "auto",
    marginBottom: "12px",
  },
  logoSubtitle: {
    fontSize: "0.75rem",
    color: "#6b7280",
    letterSpacing: "0.1em",
    margin: 0,
  },
  descriptionWrapper: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    textAlign: "center",
    animation: "fadeInUp 0.8s ease-in-out 0.4s backwards",
  },
  paragraph: {
    fontSize: "1.125rem",
    color: "#e5e7eb",
    lineHeight: "1.8",
    margin: 0,
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
  },
  bold: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  decorLine1: {
    position: "absolute",
    top: "128px",
    left: "80px",
    width: "64px",
    height: "2px",
    background:
      "linear-gradient(to right, rgba(16, 185, 129, 0.8), transparent)",
    animation: "pulse 3s ease-in-out infinite",
  },
  decorLine2: {
    position: "absolute",
    bottom: "128px",
    right: "80px",
    width: "96px",
    height: "2px",
    background:
      "linear-gradient(to left, rgba(16, 185, 129, 0.8), transparent)",
    animation: "pulse 3s ease-in-out infinite 0.7s",
  },
};
