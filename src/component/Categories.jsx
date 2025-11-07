import React from 'react'

const items = [
  { title: 'Electric Car', img: 'https://www.evindiaexpo.in/images/exhibitors/evcar.jpg' },
  { title: 'Electric Bike', img: 'https://www.evindiaexpo.in/images/exhibitors/evbike.jpg' },
  { title: 'Electric Scooter', img: 'https://www.evindiaexpo.in/images/exhibitors/evscooty.jpg' },
  { title: 'Electric Rickshaw', img: 'https://www.evindiaexpo.in/images/exhibitors/evrickshaw.jpg' },
  { title: 'Electric Cycle', img: 'https://www.evindiaexpo.in/images/exhibitors/cycle.jpg' },
  { title: 'Battery Manufacturers', img: 'https://www.evindiaexpo.in/images/exhibitors/bettery.jpg' },
  { title: 'Electric Bus', img: 'https://www.evindiaexpo.in/images/exhibitors/bus.jpg' },
  { title: 'Charging Stations & Equipment', img: 'https://www.evindiaexpo.in/images/exhibitors/charging.jpg' },
  { title: 'Solar Panel & Module Manufacturers', img: 'https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2023/05/Untitled-design-2023-05-29T101010.333.jpg' },
  { title: 'Solar Lighting & Smart Grid Technologies', img: 'https://www.eprmagazine.com/wp-content/uploads/2024/12/rayzon-solar-rennewable--1200x800.jpg' },
  { title: 'Solar Water Pumping & Irrigation Systems', img: 'https://www.bluesunpv.com/wp-content/uploads/2025/01/solar-irrigation-pump-e1736228950969-1024x513.jpg ' },
  { title: 'Inverter & Energy Storage Solution Providers', img: 'https://tse1.mm.bing.net/th/id/OIP.mnoaN_KW5LZrL783BF18ZwHaFH?pid=Api&P=0&h=180' },
  { title: 'Industrial Machinery & Equipment Manufacturers', img: 'https://tse2.mm.bing.net/th/id/OIP.SvuOliGTc9B5UQp_lV_L4wHaHa?pid=Api&P=0&h=180' },
  { title: 'Machine Tools, Cutting Tools & Precision Engineering Systems', img: 'https://www.aloktools.com/wp-content/uploads/2019/04/Features-of-Cutting-Tools.jpg' },
  { title: 'Packaging, Printing & Industrial Design Solutions', img: 'https://youronesource.com/wp-content/uploads/2024/10/packaging-design-trends-2025-innovations-ahead-1024x772.jpg' },
  { title: 'CNC Machines & 3D Printing Technologies', img: 'https://s1.raise3d.com/2024/11/7-min.jpg' },
  { title: 'Startup', img: 'https://www.itweb.co.za/static/pictures/2019/09/start-up-2019.jpg' },
  { title: 'EdTech Platforms', img: 'https://observenow.com/wp-content/uploads/2024/06/Edtech-Platforms.png ' },
  { title: 'Renewable Integration and Peak Load Management Solutions', img: 'https://tse3.mm.bing.net/th/id/OIP.x-QzcmyU0lTB7h0pwiMFagHaE8?pid=Api&P=0&h=180' },
  { title: 'Universities & College', img: 'https://www.timeshighereducation.com/sites/default/files/sydney_0.jpg' },
]

export default function Categories({ id }) {
  return (
    <section id={id} className="categories">
      <div className="categories-inner">
        <h2 className="categories-title">Major Exhibitor Profiles</h2>

        <div className="categories-grid">
          {items.map((item) => (
            <div key={item.title} className="cat-card">
              <div className="cat-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
