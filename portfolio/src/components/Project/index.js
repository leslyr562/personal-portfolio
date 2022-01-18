import React from 'react';


function Portfolio() {


  const projects = [
    {
      name: 'Budget Tracker',
      category: 'projects',
      description: 'Small application that tracks financial transactions with a graph and list',
      url: 'https://guarded-waters-52170.herokuapp.com/'
    },
    {
      name: 'Note Taker',
      category: 'projects',
      description: 'An application where crating and updating notes as a reminder',
      url: 'https://lit-crag-71791.herokuapp.com/'
    },
    {
      name: 'Pizza Hunt',
      category: 'projects',
      description: 'A pizza profile application where creating and saving favorite pizzas is possible',
      url: 'https://fathomless-savannah-68450.herokuapp.com/add-pizza'
    },
    {
      name: 'Daily Planner',
      category: 'projects',
      description: 'Plan the day hourly with current date and time',
      url: 'https://leslyr562.github.io/daily-planner/'
    },
    {
      name: 'Taskinator',
      category: 'projects',
      description: 'Track task and organize them by list',
      url: 'https://leslyr562.github.io/Taskinator/'
    },
    {
      name: 'Worldwide Weather Forecast',
      category: 'projects',
      description: 'Check the weather from any city',
      url: 'https://leslyr562.github.io/Worldwide-Weather-Forecast/'
    },

  ]

function handleClick() {

}

  return (
    <section id="pages">
      <h1 id="portfolio">My Projects:</h1>

      <div className="flex-row">
      
        {projects.map((image, i) => (
          <img
            src={require(`../../assets/projects/${i}.jpg`)}
            alt={image.name}
            className="portfolio"
            href={image.url}
            key={image.name}
          />
        ))}
      </div>

    </section>
  );
}

export default Portfolio;