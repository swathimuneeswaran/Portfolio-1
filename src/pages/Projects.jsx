import React from 'react';
import './Education.css';
import amazon from './amazon.png';
import chat from './chat.png';
import income from './income.png';
import Navbar from '../components/Navbar';

const projects = [
  {
    id: 1,
    title: 'Chat Application',
    image: chat,
    description_one: 'I used React as the front-end library for building the Chat Application.',
    description_two: 'Node.js was used to run JavaScript on the server side, and npm (Node Package Manager) was used to manage project dependencies. I have implemented Socket.',
    link: 'https://chat-appication.onrender.com',
  },
  {
    id: 2,
    title: 'Amazon Clone',
    image: amazon,
    description_one: 'I used React as the front-end library for building the Amazon Replica.',
    description_two: 'For deployment and database management, I integrated Firebase into the project. And I am currently doing this project.',
    link: 'https://challenge-41b28.web.app/',
  },
  {
    id: 3,
    title: 'Expense Tracker Management',
    image: income,
    description_one: 'I used React as the front-end library for building the Expense Management app due to its simplicity.',
    description_two: 'For deployment and database management, I integrated Firebase into the project. And I am currently doing this project.',
    link: 'https://income-expense-trackingapp.onrender.com',
  },
];

const Projects = () => {
  return (
    <>
    <Navbar />
    <section className="services" id="services">
      <h2 className="pro_head">Projects</h2>
      <div className="services-container">
        {projects.map((pro) => (
          <div className="service-box" key={pro.id}>
            <div className="service-info">
              <img src={pro.image} alt={pro.title} width="400px" height="300px" />
              <h4>{pro.title}</h4>
              <ul>
                <li><p>{pro.description_one}</p></li>
                <li><p>{pro.description_two}</p></li>
                <li><a href={pro.link} target="_blank" rel="noopener noreferrer" className="live_demo">Live Demo</a></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Projects;
