import React, {useState} from 'react';


function Portfolio({ category }) {

  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'Note Taker',
      category: 'projects',
      description: 'An application where crating and updating notes as a reminder'
    },
    {
      name: 'Budget Tracker',
      category: 'projects',
      description: 'Small application that tracks financial transactions with a graph and list'
    },
    {
      name: 'Pizza Hunt',
      category: 'projects',
      description: 'A pizza profile application where creating and saving favorite pizzas is possible'
    },
    {
      name: 'Day Planner',
      category: 'projects',
      description: 'Plan the day hourly with current date and time'
    },
    {
      name: 'Employee Tracker',
      category: 'projects',
      description: 'Track employees and save their contact information on employee cards'
    },
    {
      name: 'Weather ',
      category: 'projects',
      description: 'Check the weather from any city'
    }
  ])
  return (
    <section>
      <h1 id="portfolio">Who am I?</h1>
    </section>
  );
}

export default Portfolio;