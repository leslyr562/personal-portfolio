import React from 'react';
import Accordion from 'react-bootstrap/Accordion'


function Portfolio() {

  const groupProjects = [
    {
      name: 'Running On Empty',
      class: 'running',
      category: '(Group Project)',
      technologies: ['React.js', 'Express', 'jsonwebtoken', 'Bcrypt', 'Apollo Server', 'Graphql', 'MongoDB', 'Node.JS', 'Semantic UI'],
      description: 'Social Running/ Drinking Event Application using the MERN stack',
      github: 'https://github.com/rprice000/running-on-empty.git',
      url: 'https://gentle-depths-07774.herokuapp.com/'
    },
    {
      name: 'Tech Ticket System',
      class: 'tech',
      technologies: ['HTML5', 'CSS3', 'Javascript', 'Node.js', 'Express', 'Express-Session', 'Express-Handlebars', 'Connect-Session-Sequelize', 'Bcrypt', 'Sequelize', 'dotenv', 'NodeMailer', 'MySQL'],
      category: '(Group Project)',
      description: 'Technology ticket system would enable technology teams to capture technical issues, user requests, and other tasks in a document called a ticket. ',
      github: 'https://github.com/rprice000/tech_ticket_system.git',
      url: 'https://secure-tundra-62908.herokuapp.com/login'
    },
  ];
  const singleProjects = [

    {
      name: 'Worldwide Weather Forecast',
      class: 'forecast',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      category: '(Individual Project)',
      description: 'Weather API to check a five day forecast from any city at anytime',
      github: 'https://leslyr562.github.io/Worldwide-Weather-Forecast/',
      url: 'https://leslyr562.github.io/Worldwide-Weather-Forecast/'
    },
    {
      name: 'Budget Tracker',
      class: 'budget',
      category: '(Individual Project)',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'IndexDB', 'Service worker'],
      description: 'PWA Offline small application that tracks financial transactions with a graph and list even with no internet connection',
      github: 'https://github.com/leslyr562/Budget-Tracker-Offline.git',
      url: 'https://guarded-waters-52170.herokuapp.com/'
    },
    {
      name: 'Shop Shop',
      class: 'shop',
      category: '(Individual Project)',
      technologies: ['React', 'Redux', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'Graphql', 'Apollo-server', 'MongoDB', 'Nodemon', 'Bcrypt', 'Jsonwebtoken', 'Stripe'],
      description: 'E-commerce shopping application using Stripe to checkout and Redux State',
      github: 'https://github.com/leslyr562/shop-shop.git',
      url: 'https://shoping-shop.herokuapp.com/'
    }

  ];


  return (
    <section id="portfolio">
      <h1 className='sectionName'>My Projects:</h1>

<div id='projects'>
     
      <div className='float-left'>
      <h2> Group Projects</h2>
        <Accordion defaultActiveKey="0" flush>
          {groupProjects.map((images, i) => (
            <Accordion.Item eventKey={(`${i}`)}>
              <Accordion.Header>{images.name}</Accordion.Header>
              <Accordion.Body>
                <a className='imagelink' href={images.url} target="_blank" rel="noreferrer">
                  <img
                    src={require(`../../assets/projects/${i}.png`)}
                    alt={images.name}
                    className='portfolio'
                    key={images.name}
                  />
                </a>
                <h4>Description:</h4>
                <p className='description'>{images.description}</p>
                <h4>Technologies:</h4>
                {images.technologies.map(technology => (

                  <li className='list'>{technology}</li>


                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}

        </Accordion>
      </div>


      
      <div className='float-right'>
      <h2 >Individual Projects</h2>
        <Accordion defaultActiveKey="0" flush>
          {singleProjects.map((image, i) => (
            <Accordion.Item eventKey={(`${i}`)}>
              <Accordion.Header>{image.name}</Accordion.Header>
              <Accordion.Body>
                <a className='imagelink' href={image.url} target="_blank" rel="noreferrer">
                  <img
                    src={require(`../../assets/projects/${i}.jpg`)}
                    alt={image.name}
                    className="portfolio"
                    key={image.name}
                  />
                </a>
                <h4>Description:</h4>
                <p className='description'>{image.description}</p>
                <h4>Technologies:</h4>
                {image.technologies.map(technology => (

                  <li className='list'>{technology}</li>


                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      </div>
    </section>
  );
}

export default Portfolio;