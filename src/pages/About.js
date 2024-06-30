import React, { useState, useEffect } from 'react';
import prof from '../assets/images/profile.jpeg';
import lollipop from '../assets/images/lollipop.png';
import air from '../assets/images/airpollution.png';
import weather from '../assets/images/weather.png';
import weather2 from '../assets/images/weather-git.png';
import bmw from '../assets/images/bmw-visualize.png';
import { Container, Image, Row, Col, Alert, Button } from 'react-bootstrap';

const rotatingTextStyles = {
  transition: 'opacity 0.3s ease-in-out',
};

function About() {
  const [currentText, setCurrentText] = useState('Me');
  const texts = ['Me', 'IT Business Analyst', 'Front-End Developer', 'Chalumphu Atjarit'];
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [texts]);


  return (
    <>
      <Container fluid className="bg-dark d-flex align-items-center justify-content-center p-4" style={{ minHeight: '100vh' }}>
        <Container className="text-center">
          <Image
            src={prof}
            roundedCircle
            className="img-fluid mb-4 border border-4 border-secondary"
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
          <h2 className="text-white display-4">
            About{' '}
            <span className="text-warning fw-normal" style={rotatingTextStyles}>
              {currentText}
            </span>
          </h2>
          <p className="text-white lead">
            I graduated from the <code>Database and Intelligence Systems track</code> at the Faculty of ICT, Mahidol
            University. My passion for technology drives me to continuously explore new concepts and technologies. With a
            keen interest in database management, data analysis, and software development, I am eager to apply my skills
            to real-world projects and contribute to meaningful innovations.
          </p>
          <a href="/resume.pdf" download className="btn btn-outline-warning btn-lg">
            Download Resume
          </a>
        </Container>
      </Container>

      <Container className="mt-4 justify-content-center">
        <h2 className="display-5 mb-4 text-center">Projects and Experience</h2>

        <Row className="mb-4 justify-content-center">
          <Col xs={12} md={6} className="bg-warning text-white p-4 d-flex flex-column justify-content-between">
            <div>
              <h2>Lollipop Music <br /> <small className='text-muted fs-6'>Jan 2022 - May 2022</small></h2>
              <Image src={lollipop} fluid className="mb-3" alt="Lollipop Music Project" />
              <p className="fs-5">
                Lollipop Music is a dynamic music application built with React and Node.js, hosted on Nginx and Amazon EC2.
                <br />
                Email: <code>Senyai_bark@hotmail.com</code> Password: <code>loveDogs88</code>
              </p>
            </div>
            <div>
              <Button variant="secondary" href="https://github.com/Waariss/Lollipop_Music_Project" target="_blank" rel="noopener noreferrer">
                Lollipop Music GitHub
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-4 justify-content-center">
          <Col xs={12} md={6} className="bg-warning text-white p-4 d-flex flex-column justify-content-between">
            <div>
              <h2>Air Pollution Alert <br /> <small className='text-muted fs-6'>Jan 2023 - May 2023</small></h2>
              <Image src={air} fluid className="mb-3" alt="Air Pollution Alert Project" />
              <p className="fs-5">
                This project aims to design an application addressing urban air pollution issues. Air Pollution Alert provides users with real-time air quality information, including alerts and pollutant details.
              </p>
            </div>
            <div className="d-flex justify-content-around mt-2">
              <Button variant="secondary" href="https://sites.google.com/view/air-pollution-alert-applicatio/home" target="_blank" rel="noopener noreferrer">
                Phase 1
              </Button>
              <Button variant="secondary" href="https://sites.google.com/view/air-pollution-alert/home" target="_blank" rel="noopener noreferrer">
                Phase 2
              </Button>
              <Button variant="secondary" href="https://sites.google.com/view/air-pollution-alert-apps/home" target="_blank" rel="noopener noreferrer">
                Phase 3
              </Button>
            </div>
          </Col>
        </Row>


        {showMore && (
          <>
            <Row className="mb-4 justify-content-center">
              <Col xs={12} md={6} className="bg-warning text-white p-4 d-flex flex-column justify-content-between">
                <div>
                  <h2>Weather360 <br /> <small className='text-muted fs-6'>Mar 2023 - April 2023</small></h2>
                  <Image src={weather} fluid className="mb-3" alt="Weather360" />
                  <Image src={weather2} fluid className="mb-3" alt="Weather360" />
                  <p className="fs-5">
                    This project aims to design an application using Flutter. As the lead designer, I created an application that analyzes the weather based on the user's location.
                  </p>
                </div>
                <div>
                  <Button variant="secondary" href="https://github.com/mhoomind/Weather360" target="_blank" rel="noopener noreferrer">
                    Weather360 GitHub
                  </Button>
                </div>
              </Col>
            </Row>

            {/* Project 4 */}
            <Row className="mb-4 justify-content-center">
              <Col xs={12} md={6} className="bg-warning text-white p-4 d-flex flex-column justify-content-between">
                <div>
                  <h2>Visualized BMW using Tableau <br /> <small className='text-muted fs-6'>Mar 2023 - April 2023</small></h2>
                  <Image src={bmw} fluid className="mb-3" alt="Visualized BMW using Tableau" />
                  <p className="fs-5">
                    This project involved a comprehensive analysis of the BMW dataset. I conducted a detailed examination of BMW's business processes using Tableau Prep and Tableau Desktop for data visualization. I developed and analyzed a data dictionary to ensure clarity and consistency and created an Entity-Relationship (ER) diagram. Additionally, I designed a star schema encompassing payment, product, and branch processes, which contributed to enhanced organizational insights and decision-making capabilities.
                  </p>
                </div>
                <div>
                  <Button variant="secondary" href="https://github.com/mhoomind/Visualized-BMW-using-Tableau" target="_blank" rel="noopener noreferrer">
                    Visualized BMW GitHub
                  </Button>
                </div>
              </Col>
            </Row>
          </>
        )}

        <div className="text-center mt-4 mb-4 p-3">
          <Button variant="outline-dark" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      </Container>

      <Container fluid className='bg-dark text-black py-3'>
        <h2 className="display-5 mt-2 text-center text-white">Internship</h2>
        <Row className="justify-content-center mt-4">
          <Col md={4} className="d-flex align-items-stretch">
            <div className="p-4 bg-light rounded w-100">
              <h3 className="mb-3">Maliroad (bankrupt) - Year 2</h3>
              <p>
                <a className="btn btn-secondary">Front-End Developer</a>
              </p>
              <p className="text-muted mb-3">Internship Period: May 2022 - August 2022</p>
              <p className="mb-3">
                As a Front-end Developer at Maliroad, I developed the Langka Amulet web application using the Angular framework. This application was successfully launched on the Google Store, showcasing my skills in Angular development and project deployment. Additionally, I played a key role in designing Maliroad's website using Figma, focusing on creating a user-friendly.
              </p>
              <p>
                <a className="btn btn-outline-secondary">Tech Stack - Angular Framework, JavaScript</a>
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">
            <div className="p-4 bg-light rounded w-100">
              <h3 className="mb-3">Bangkok Payment Solution - Year 3</h3>
              <p>
                <a className="btn btn-secondary">Full-Stack Developer</a>
              </p>
              <p className="text-muted mb-3">Internship Period: May 2023 - August 2023</p>
              <p className="mb-3">
                As a Full-Stack Developer, I implemented a new feature in the timesheet web portal to facilitate the collection of monthly quotas. Addressed and resolved identified bugs on the website, ensuring enhanced functionality and user experience. Implemented UI enhancements for improved aesthetics and usability on the website.
              </p>
              <p>
                <a className="btn btn-outline-secondary">Tech Stack - Java Spring Boot, JavaScript, SQL</a>
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex align-items-stretch">
            <div className="p-4 bg-light rounded w-100">
              <h3 className="mb-3">NPR Digital Partner - Year 4</h3>
              <p>
                <a className="btn btn-secondary">IT Business Analyst</a>
              </p>
              <p className="text-muted mb-3">Internship Period: January 2024 - April 2024</p>
              <p className="mb-3">
                As a IT Business Analyst, I have engaged in extensive requirement gathering sessions with the customer to ensure a comprehensive understanding of project needs. Collaborated with the development team to discuss requirements, designed wireframes, and authored the Business Requirement Document (BRD) to align stakeholders and project deliverables effectively.
              </p>
              <p>
                <a className="btn btn-outline-secondary">Tools - Figma, FigJam, ClickUp, Excel </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default About;
