import React from "react";
import StarIcon from "@mui/icons-material/Star"; // Import the StarIcon from Material-UI

const ServiceManagement = () => {
  const services = [
    {
      name: "Workshops",
      description:
        "Engaging sessions designed to upskill teachers and students, covering topics like innovative teaching methods, workplace readiness, from bag to briefcase, building professional learning Network and career readiness.",
    },
    {
      name: "Professional Grooming",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      name: "Teacher Mentoring",
      description:
        "Personalized guidance and support for educators to excel in their roles, fostering professional growth and classroom effectiveness.",
    },
    {
      name: "School Mentoring",
      description:
        "Tailored solutions to improve overall school quality, including curriculum development, teacher training programs, and strategic planning. Bring quality programs in school. Take the school to it's next level of growth.",
    },
    {
      name: "AI Integration Training",
      description:
        "Specialized training for schools to implement artificial intelligence (AI) as a skill subject and leverage AI tools for enhanced learning experiences.",
    },
    {
      name: "Empowerment Workshops",
      description:
        "Empowering sessions focused on leveraging technology and fostering confidence among employees both corporates and educational spaces",
    },
    {
      name: "Motivational Sessions",
      description:
        "Inspirational talks and workshops aimed at fostering positivity, resilience, and innovation based on your workplace",
    },
    {
      name: "Leadership Trainings",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      name: "CBSE related all Trainings and updates",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      name: "Collaborate and organize workshops",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      name: "Hosting the event as an MC.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      name: "Educational Event organizations.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    // Add more services as needed
  ];

  const styles = `
    .service-management {
      letter-spacing: 0.2px;
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
      grid-template-columns: repeat(2, 1fr); /* Display two cards per row */
      grid-gap: 40px; /* Reduced gap between cards */
    }

    .service-card {
      position: relative;
      margin-top: 10px;
      overflow: hidden;
      display: flex;
      color: black;
      background-color: hsl(51, 100%, 62%);
      align-items: center;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }

    .service-card:hover {
      transform: translateY(-5px);
    }

    .service-icon {
      color: #3b5998;
      font-size: 48px;
      margin-right: 20px;
    }

    .service-content h3 {
      font-size: 22px;
      margin-bottom: 10px;
    }

    .service-content p {
      font-size: 16px;
      line-height: 1.5;
    }

    .services-intro {
      border: 3px solid #ccc;
      color: black;
      font-weight:600;
      font-size: 20px;
      padding: 20px;
      margin-bottom: 40px;
      border-radius: 10px;
    }

    .services-intro p {
      font-size: 18px;
      line-height: 1.5;
    }
  `;

  const colors = [
    "#FFCD38",
    "#29D6EC",
    "#83E14A",
    "#FF8990",
    // "#FF5722",
    // "#673AB7",
    // "#607D8B",
    // "#4CAF50",
    // "#795548",
    // "#FF9800",
    // "#E91E63",
    // "#9C27B0",
  ];

  return (
    <div>
      <style>{styles}</style>
      <div className="service-management">
        <h1>Services</h1>
        <div className="services-intro">
          <p>
            N'Able offers a range of services aimed at enhancing education and
            personal development.
          </p>
        </div>
        <div className="services-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ backgroundColor: colors[index % colors.length] }} 
            >
              {" "}
              <div className="service-icon">
                <StarIcon />
              </div>
              <div className="service-content">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceManagement;
