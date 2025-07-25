import React from 'react';
import styles from './Portfolio.css'
function Portfolio() {
  return (
    <div>
      <h1 class="ded">My Portfolio</h1>
      <nav class="rrr">
        <button><a href="#" class="d">Projects</a></button>
        <button><a href="#" class="d">Education</a></button>
        <button><a href="#" class="d">Certificates</a></button>
    </nav>
      <div className="card">
        <img src="tic-tac-toe.png" alt="Project"/>
        <h2>My name is: T Sri Charan</h2>
        <p>
          This is an breif description...
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
