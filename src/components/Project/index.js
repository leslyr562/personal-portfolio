import React from 'react';


function Portfolio() {


  const projects = [
    {
      name: 'Budget Tracker',
      class: 'budget',
      category: 'projects',
      description: 'PWA Offline small application that tracks financial transactions with a graph and list even with no internet connection',
      github: 'https://github.com/leslyr562/Budget-Tracker-Offline.git',
      url:'https://guarded-waters-52170.herokuapp.com/'
    },
    {
      name: 'Take Notes',
      class: 'notes',
      category: 'projects',
      description: 'An application where crating and updating notes as a reminder',
      github: 'https://github.com/leslyr562/Take-notes.git',
      url:'https://lit-crag-71791.herokuapp.com/'
    },
    {
      name: 'Daily Planner',
      class: 'planner',
      category: 'projects',
      description: 'Plan the day hourly with current date and time',
      github:'https://github.com/leslyr562/daily-planner.git',
      url: 'https://leslyr562.github.io/daily-planner/'
    },
    {
      name: 'Worldwide Weather Forecast',
      class: 'forecast',
      category: 'projects',
      description: 'Check the weather from any city',
      github: 'https://leslyr562.github.io/Worldwide-Weather-Forecast/',
      url:'https://leslyr562.github.io/Worldwide-Weather-Forecast/'
    },
    {
      name: 'Running On Empty',
      class: 'running',
      category: 'projects',
      description: 'Social Running/ Drinking Event Application',
      github: 'https://github.com/rprice000/running-on-empty.git',
      url: 'https://gentle-depths-07774.herokuapp.com/'
    },
    {
      name: 'Tech Ticket System',
      class: 'tech',
      category: 'projects',
      description: 'Technology ticket system would enable technology teams to capture technical issues, user requests, and other tasks in a document called a ticket. ',
      github: 'https://github.com/rprice000/tech_ticket_system.git',
      url: 'https://secure-tundra-62908.herokuapp.com/login'
    }

  ];

  return (
    <section id="portfolio">
      <h1 className='sectionName'>My Projects:</h1>

      <div>
      
        {projects.map((image, i) => (
          <div className={image.class}>
            <p>{image.name}</p>
           <a className='imagelink' href={image.url} target="_blank" rel="noreferrer">
          <img
            src={require(`../../assets/projects/${i}.jpg`)}
            alt={image.name}
            className="portfolio"
            key={image.name}
          />
          </a>
          <p className='description'>Description: {image.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Portfolio;