import React from "react";

const ServiceManagement = () => {
  const services = [
    "Workshops: Engaging sessions designed to upskill teachers and students, covering topics like innovative teaching methods, workplace readiness, from bag to briefcase, building professional learning Network and career readiness.",
    "For Professional grooming",
    "Teacher Mentoring: Personalized guidance and support for educators to excel in their roles, fostering professional growth and classroom effectiveness.",
    "School Mentoring: Tailored solutions to improve overall school quality, including curriculum development, teacher training programs, and strategic planning. Bring quality programs in school. Take the school to it's next level of growth.",
    "AI Integration Training: Specialized training for schools to implement artificial intelligence (AI) as a skill subject and leverage AI tools for enhanced learning experiences.",
    "Empowerment Workshops: Empowering sessions focused on leveraging technology and fostering confidence among employees both corporates and educational spaces",
    "Motivational Sessions: Inspirational talks and workshops aimed at fostering positivity, resilience, and innovation based on your workplace",
    "Leadership Trainings",
    "CBSE related all Trainings and updates.",
    "Collaborate and organize workshops",
    "Hosting the event as an MC.",
    "Educational Event organizations.",
  ];

  const styles = `
    .service-management {
      font-family: sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px;
      text-align: center;
    }

    .service-management h1 {
      font-size: 36px;
      margin-bottom: 40px;
    }

    .services-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 40px;
    }

    .service-card {
      position: relative;
      margin-top: 10px;
      overflow: hidden;
      width: 360px;
      height: 170px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 1rem 0.5rem;
      box-shadow: 0 1px 1px rgb(0, 0, 0, 0.1), 0 2px 2px rgb(0, 0, 0, 0.1), 0 4px 4px rgb(0, 0, 0, 0.1), 0 8px 8px rgb(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }

    .service-card:hover {
      transform: scale(1.05);
    }

    .service-card:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      background: #FF003A;
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      transition: width 0.3s ease, height 0.3s ease;
      z-index: 0;
    }

    .service-card:hover:before {
      width: 200%;
      height: 200%;
      z-index: -1;
    }

    .service-card:hover h3 {
      color: #fff;
      transition: all 0.3s ease;
    }

    .service-card:hover p {
      color: #f1f1f1;
      transition: all 0.3s ease;
    }

    .service-icon {
      color: #3b5998;
      font-size: 48px;
      margin-bottom: 20px;
    }

    .service-content h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .service-content p {
      font-size: 16px;
      line-height: 1.5;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="service-management">
        <h1>Services</h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "initial",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          N'Able offers a range of services aimed at enhancing education and
          personal development
        </p>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <h3>{service.split(":")[0]}</h3>
                <p>{service.split(":")[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceManagement;
