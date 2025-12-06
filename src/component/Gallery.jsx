import React from "react";

export default function Gallery() {
  const segments = [
    {
      title: "ELECTRIC VEHICLES",
      img: "https://revexpo.in/wp-content/uploads/2024/07/ELECTRIC-VEHICLE-1.jpg",
    },
    {
      title: "SOLAR ENERGY",
      img: "https://revexpo.in/wp-content/uploads/2024/07/SOLAR-ENERGY.jpg",
    },
    {
      title: "Manufacturing & Industrial Engineering",
      img: "https://images.stockcake.com/public/a/4/a/a4a2168d-2bf3-49ba-a518-b2061d92d80e_large/robotic-assembly-line-stockcake.jpg",
    },
    {
      title: "CHARGING INFRA",
      img: "https://revexpo.in/wp-content/uploads/2024/07/CHARGING-INFRASTRUCTURE.jpg",
    },
    {
      title: "AUTO COMPONENTS",
      img: "https://revexpo.in/wp-content/uploads/2025/04/DSCF1609-min-scaled.jpg",
    },
    {
      title: "ENERGY STORAGE",
      img: "https://revexpo.in/wp-content/uploads/2024/07/about-expo-img.png",
    },
    {
      title: "Education & Skill Development",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Skills_Banner.jpg",
    },
    {
      title: "TRANSMISSION",
      img: "https://revexpo.in/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-16-at-11.12.18_a2aeff40.webp",
    },
  ];

  return (
    <section className="focused-segments">
      <h1 className="title" style={{ fontSize: "2rem" }}>
        FOCUSED SEGMENTS
      </h1>

      <div className="gallery-container">
        {segments.map((item, index) => (
          <div key={index} className="segment">
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} />
              <div className="text-overlay">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .focused-segments {
          background: #0b2119;
          padding: 60px 0;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .title {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          color: white;
          margin-bottom: 40px;
          text-transform: uppercase;
        }

        .gallery-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 400px;
          gap: 8px;
          padding: 0 20px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .segment {
          flex: 1;
          height: 350px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          min-width: 80px;
        }

        .segment:hover {
          flex: 2;
          min-width: 300px;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
        }

        .segment img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(0.8);
        }

        .segment:hover img {
          transform: scale(1.05);
          filter: brightness(1);
        }

        .text-overlay {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          text-shadow: 0px 2px 8px rgba(0,0,0,0.8);
          white-space: normal;
          text-align: center;
          width: 90%;
          line-height: 1.2;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
          letter-spacing: 0.5px;
        }

        .segment:hover .text-overlay {
          bottom: 35px;
          opacity: 1;
          visibility: visible;
          font-size: 17px;
          text-shadow: 0px 4px 12px rgba(0,0,0,0.9);
        }

        .gallery-container:hover .segment:not(:hover) {
          flex: 0.7;
          opacity: 0.8;
          filter: brightness(0.7);
        }

        /* Tablet optimization */
        @media (max-width: 1024px) {
          .gallery-container {
            height: 300px;
          }
          
          .segment {
            height: 280px;
          }
          
          .text-overlay {
            font-size: 13px;
          }
          
          .segment:hover .text-overlay {
            font-size: 15px;
          }
        }

        /* Mobile optimization - Primary changes here */
        @media (max-width: 768px) {
          .focused-segments {
            padding: 40px 0;
          }

          .title {
            font-size: 1.5rem;
            margin-bottom: 30px;
            padding: 0 20px;
          }
          
          .gallery-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: auto;
            gap: 12px;
            padding: 0 16px;
          }
          
          .segment {
            height: 200px;
            min-width: unset;
            flex: none;
            border-radius: 10px;
          }

          .segment:hover {
            flex: none;
            min-width: unset;
            transform: scale(1.02);
          }

          .segment img {
            filter: brightness(0.7);
          }

          .segment:active img {
            filter: brightness(0.9);
          }
          
          /* Always show text on mobile */
          .text-overlay {
            opacity: 1;
            visibility: visible;
            bottom: 15px;
            font-size: 11px;
            font-weight: 600;
            width: 85%;
            line-height: 1.3;
            letter-spacing: 0.3px;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
            padding: 8px 6px;
            border-radius: 6px;
          }

          .segment:active .text-overlay {
            font-size: 12px;
            bottom: 18px;
          }
          
          /* Remove desktop hover effects on mobile */
          .gallery-container:hover .segment:not(:hover) {
            flex: none;
            opacity: 1;
            filter: none;
          }
        }

        /* Small mobile optimization */
        @media (max-width: 480px) {
          .focused-segments {
            padding: 30px 0;
          }

          .title {
            font-size: 1.25rem;
            margin-bottom: 24px;
          }

          .gallery-container {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 0 20px;
          }
          
          .segment {
            height: 220px;
            border-radius: 12px;
          }

          .segment:active {
            transform: scale(0.98);
          }

          .text-overlay {
            font-size: 13px;
            bottom: 20px;
            width: 88%;
            padding: 10px 8px;
            line-height: 1.4;
          }

          .segment:active .text-overlay {
            font-size: 14px;
            bottom: 22px;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .segment {
            height: 180px;
          }

          .text-overlay {
            font-size: 12px;
            padding: 8px 6px;
          }
        }
      `}</style>
    </section>
  );
}