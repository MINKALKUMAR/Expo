import React from "react";
import hotelImage from "../assets/Hotel.png"; // ✅ import your local image

export default function EventLocation({ id }) {
  const directionsUrl = "https://maps.app.goo.gl/qVriw5TdGhZFUHUz5";

  return (
    <section id={id} className="location">
      <div className="location-inner">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.505054540061!2d77.7255533744056!3d29.472459875216604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1be948f1964d%3A0xd6584e6d82ee16ee!2sPalasa%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sin!4v1762490847164!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Location Map"
          ></iframe>
        </div>

        <div className="addr-card">
          {/* ✅ Inline background using imported image */}
          <div
            className="addr-image"
            aria-hidden="true"
            style={{
              background: `url(${hotelImage}) center/cover no-repeat`,
            }}
          />
          <div className="addr-content">
            <div className="addr-title">Address</div>
            <div className="addr-text">Muzaffarnagar, Uttar Pradesh</div>
            <a
              className="btn primary dir-btn"
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
