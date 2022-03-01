import React from 'react';


function Portfolio() {


  const projects = [
    {
      name: 'Running On Empty',
      class: 'running',
      category: '(Group Project)',
      technologies: ['React.js', 'Express', 'jsonwebtoken', 'bcrypt', 'Apollo Server', 'Graphql', 'MongoDB', 'Node.JS', 'Semantic UI'],
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
    {
      name: 'Budget Tracker',
      class: 'budget',
      category: '(Individual Project)',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'express', 'mongoDB', 'mongoose', 'indexDB', 'service worker'],
      description: 'PWA Offline small application that tracks financial transactions with a graph and list even with no internet connection',
      github: 'https://github.com/leslyr562/Budget-Tracker-Offline.git',
      url: 'https://guarded-waters-52170.herokuapp.com/'
    },
    {
      name: 'Shop Shop',
      class: 'shop',
      category: '(Individual Project)',
      technologies: ['React', 'Redux', 'CSS3', 'JavaScript', 'Node.js', 'express', 'graphql', 'apollo-server', 'mongoDB', 'nodemon', 'bcrypt', 'jsonwebtoken', 'Stripe'],
      description: 'E-commerce shopping application using Stripe to checkout and Redux State',
      github: 'https://github.com/leslyr562/shop-shop.git',
      url: 'https://shoping-shop.herokuapp.com/'
    },
    {
      name: 'Worldwide Weather Forecast',
      class: 'forecast',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      category: '(Individual Project)',
      description: 'Weather API to check a five day forecast from any city at anytime',
      github: 'https://leslyr562.github.io/Worldwide-Weather-Forecast/',
      url: 'https://leslyr562.github.io/Worldwide-Weather-Forecast/'
    }

  ];


  return (
    <section id="portfolio">
      <h1 className='sectionName'>My Projects:</h1>

      <div>

        {projects.map((image, i) => (
          <div className={image.class}>
            <h2>{image.name}</h2>
            <h5>{image.category}</h5>
            <div className='imgs'>
            <a className='imagelink' href={image.url} target="_blank" rel="noreferrer">
              <img
                src={require(`../../assets/projects/${i}.jpg`)}
                alt={image.name}
                className="portfolio"
                key={image.name}
              />
            </a>
            </div>
            <div className='des'>
              <h3>Description:</h3>
            <p className='description'>{image.description}</p>
            <h3>Technologies:</h3>
            {image.technologies.map(technology => (
             
                <li className='list'>{technology}</li>
                
              
            ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Portfolio;