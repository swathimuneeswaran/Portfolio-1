import React from 'react';
import './Education.css';
import library from './library.png';
import mobile from './mobile.png';
import todo from './todo.png';
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
    github:'https://github.com/swathimuneeswaran/Chat-Appication.git'
  },
 
  {
    id: 2,
    title: 'Expense Tracker Management',
    image: income,
    description_one: 'I used React as the front-end library for building the Expense Management app due to its simplicity.',
    description_two: 'For deployment and database management, I integrated Firebase into the project. And I am currently doing this project.',
    link: 'https://income-expense-trackingapp.onrender.com',
    github:'https://github.com/swathimuneeswaran/Income-Expense-TrackingApp.git'
  },
  {
    id: 3,
    title: 'Todo Application',
    image: todo,
    description_one: 'The ToDo Application is a user-friendly web-based task management tool designed to help users keep track of their daily tasks and activities.',
    description_two: ' Built using modern web technologies, this application demonstrates key functionalities such as creating, reading, updating, and deleting (CRUD) tasks.',
    link: 'https://mytodos-task.netlify.app',
    github:'https://github.com/swathimuneeswaran/React-3-Task.git'
  },
  {
    id: 4,
    title: 'Online Mobile Shopping',
    image: mobile,
    description_one: 'The Online Mobile Shopping Application is a comprehensive e-commerce platform designed for purchasing mobile phones.',
    description_two: 'The application uses React Context for state management, providing a robust and scalable architecture for handling global state throughout the application.',    
    link: 'https://context-task.netlify.app/',
    github:'https://github.com/swathimuneeswaran/Context-Task.git',
  },
  {
    id: 5,
    title: 'Library Book Management',
    image: library,
    description_one: 'This mini project showcases the integration of React and the Context API to manage state efficiently across the application. ',
    description_two: 'Users can add new books to the library collection and view the list of available books',
    link: 'https://formik-form1.netlify.app/',
    github:'https://github.com/swathimuneeswaran/Formik.git'
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
                
                <button className="live_demo1"><li><a href={pro.github} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>Source Code</a></li></button>
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
