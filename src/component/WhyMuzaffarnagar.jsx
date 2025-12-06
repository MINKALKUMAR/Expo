import React from "react";

/**
 * WhyMuzaffarnagar.jsx
 *
 * - Uses public/map.png as background and map card (ensure map.png is in your public folder)
 * - Left overlay contains the provided copy
 * - Big bottom "MUZAFFARNAGAR" uses an image inside the text (replace buildingImage if you prefer local)
 * - Responsive and visually similar to your reference image
 */

const WhyMuzaffarnagar = () => {
  // Replace with your own building image path (e.g. "/assets/building.jpg") if you want local.
  const buildingImage =
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80";

  const text = `Muzaffarnagar is emerging as one of North India’s most dynamic industrial growth centers, making it an ideal venue for the Uttar Bharat Udyog Expo 2026. Strategically located between Delhi NCR, Haryana, and Uttarakhand, the city benefits from excellent road and rail connectivity, allowing easy access for manufacturers, industry professionals, and trade visitors from across the region. Known for its strong base of MSMEs, engineering units, metal works, agro-processing, and machinery manufacturing, Muzaffarnagar has steadily evolved into a high-potential industrial and commercial hub. The region is also witnessing growing demand for electric mobility, renewable energy, and modern manufacturing technologies, driven by rapid urbanization and expanding rural markets. With Uttar Pradesh’s supportive industrial and EV policies offering incentives and investment opportunities, Muzaffarnagar provides a favorable ecosystem for businesses exploring expansion and collaboration. Its combination of strategic location, industrial depth, accessible logistics, and rising clean-energy adoption makes Muzaffarnagar a powerful and practical choice for hosting a large-scale business, education, and industrial exposition.`;

  return (
    <section className="why-muzaffarnagar" aria-labelledby="why-title">
      {/* Background layer uses public/map.png */}
      <div className="background" aria-hidden="true" />

      {/* Main content overlay */}
      <div className="overlay">
        <h2 id="why-title" className="title">
          WHY MUZAFFARNAGAR?
        </h2>

        <div className="copy" aria-live="polite">
          {text}
        </div>
      </div>

      {/* Floating map image (uses same public/map.png) */}
      <div className="floating-map" aria-hidden="true">
        <img src="/map.png" alt="Muzaffarnagar map" className="map-img" loading="lazy" />
      </div>

      {/* Big clipped city name */}
      <div className="clipped-name" aria-hidden="true">
        <span
          className="city"
          style={{
            backgroundImage: `url("${buildingImage}")`,
          }}
        >
          MUZAFFARNAGAR
        </span>
      </div>

      <style>{`
        :root{
          --bg: #07130f;
          --accent: #2aa07a;
          --muted: #d3e7de;
        }

        .why-muzaffarnagar{
          position: relative;
          min-height: 100vh;
          display: block;
          overflow: hidden;
          background-color: var(--bg);
          font-family: Inter, "Segoe UI", Roboto, Arial, sans-serif;
          color: #fff;
        }

        /* Full-bleed map background (public/map.png) - blurred & darkened for contrast */
        .why-muzaffarnagar .background{
          position: absolute;
          inset: 0;
          background-image: url("/map.png");
          background-size: cover;
          background-position: center;
          filter: blur(6px) brightness(0.35) contrast(0.95);
          transform: scale(1.03);
          z-index: 0;
        }

        /* subtle overlay to lift foreground */
        .why-muzaffarnagar::after{
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7,19,15,0.1) 0%, rgba(7,19,15,0.6) 60%, rgba(7,19,15,0.9) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Overlay contains the textual content (left aligned visually on wide screens) */
        .overlay{
          position: relative;
          z-index: 3;
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(24px, 6vw, 64px);
          display: grid;
          gap: 20px;
        }

        .title{
          margin: 0 0 8px 0;
          color: var(--accent);
          font-size: clamp(20px, 3vw, 36px);
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 800;
          border-left: 6px solid var(--accent);
          padding-left: 18px;
          background: linear-gradient(90deg, rgba(255,255,255,0.02), transparent);
          display: inline-block;
        }

        .copy{
          color: white;
          // background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          padding: clamp(12px, 2.4vw, 22px);
          // border-radius: 12px;
          font-size: clamp(14px, 1.6vw, 18px);
          line-height: 1.8;
          text-align: justify;
          // box-shadow: 0 10px 40px rgba(0,0,0,0.55);
          // backdrop-filter: blur(4px) saturate(0.9);
        }

        /* Floating map card — visually to the right on desktop */
        .floating-map{
          position: absolute;
          right: clamp(14px, 4vw, 72px);
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: clamp(220px, 36vw, 560px);
          pointer-events: none;
          filter: drop-shadow(0 12px 28px rgba(102, 230, 153, 0.62));
        }

        .map-img{
          width: 100%;
          height: auto;
          object-fit: cover;
          // border-radius: 18px;
          // box-shadow:
          //   0 18px 60px rgba(3,10,8,0.7),
          //   inset 0 1px 0 rgba(255,255,255,0.03);
          filter: saturate(1.06) contrast(1.03);
          animation: float 6s ease-in-out infinite;
        }

        /* Big clipped text at bottom similar to your reference */
        .clipped-name{
          position: absolute;
          left: 50%;
          bottom: clamp(14px, 4vw, 36px);
          transform: translateX(-50%);
          z-index: 4;
          width: min(96%, 1400px);
          text-align: center;
          pointer-events: none;
        }

        .city{
          display: inline-block;
          font-weight: 900;
          font-size: clamp(40px, 7.6vw, 120px);
          line-height: 0.85;
          letter-spacing: 6px;
          text-transform: uppercase;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          background-position: center;
          background-size: cover;
          text-shadow: 0 8px 28px rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.4);
          padding: 4px 10px;
        }

        @keyframes float{
          0% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0); }
        }

        /* Responsive behavior */
        @media (max-width: 1000px){
          .floating-map{
            right: 6%;
            width: 46vw;
            top: 62%;
            transform: translateY(-20%);
          }

          .overlay{
            padding-left: clamp(18px, 6vw, 36px);
            padding-right: clamp(18px, 6vw, 36px);
          }

          .city{
            font-size: clamp(36px, 12vw, 72px);
            letter-spacing: 3px;
          }
        }

        @media (max-width: 640px){
          .why-muzaffarnagar{
            min-height: 120vh;
          }

          .floating-map{
            position: relative;
            top: auto;
            right: auto;
            transform: none;
            margin: 20px auto 0 auto;
            width: 92%;
            max-width: 720px;
            z-index: 2;
          }

          .overlay{
            padding: 18px;
          }

          .copy{
            font-size: 14px;
            padding: 12px;
          }

          .clipped-name{
            bottom: 8px;
          }

          .city{
            font-size: clamp(28px, 9vw, 56px);
            letter-spacing: 2px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyMuzaffarnagar;
