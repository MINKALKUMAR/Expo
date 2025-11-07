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
      img: "https://www.esi-group.com/sites/default/files/styles/full_width/public/blog_page/4048/EV%20Battery%20Manufacturing.jpg?itok=b_35shXZ",
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
      <h2 className="title">FOCUSED SEGMENTS</h2>

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

        /* improved text styling */
        .text-overlay {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 15px; /* smaller text */
          font-weight: 700;
          text-transform: uppercase;
          text-shadow: 0px 2px 8px rgba(0,0,0,0.8);
          white-space: normal; /* allows wrapping */
          text-align: center;
          width: 90%; /* prevent overflow */
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
          font-size: 17px; /* slightly bigger on hover */
          text-shadow: 0px 4px 12px rgba(0,0,0,0.9);
        }

        .gallery-container:hover .segment:not(:hover) {
          flex: 0.7;
          opacity: 0.8;
          filter: brightness(0.7);
        }

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

        @media (max-width: 768px) {
          .title {
            font-size: 22px;
          }
          
          .gallery-container {
            height: 250px;
            flex-wrap: wrap;
            justify-content: flex-start;
            overflow-x: auto;
            padding: 10px 20px;
          }
          
          .segment {
            min-width: 200px;
            height: 200px;
            flex: none;
          }
          
          .segment:hover {
            flex: none;
            min-width: 220px;
          }
          
          .gallery-container:hover .segment:not(:hover) {
            flex: none;
            opacity: 1;
            filter: brightness(0.8);
          }
          
          .text-overlay {
            font-size: 12px;
            bottom: 18px;
          }
          
          .segment:hover .text-overlay {
            font-size: 13px;
            bottom: 22px;
          }
        }

        @media (max-width: 480px) {
          .gallery-container {
            height: 200px;
          }
          
          .segment {
            min-width: 150px;
            height: 180px;
          }
          
          .segment:hover {
            min-width: 170px;
          }
          
          .text-overlay {
            font-size: 11px;
            width: 95%;
          }

          .segment:hover .text-overlay {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
