import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêt</h3>
      <ul>
        <li>
          <i className="fas fa-running"></i>
          <span> Course à pied </span>
        </li>
        <li>
          <i className="fas fa-file-alt"></i>
          <span> Lecture </span>
        </li>
        <li>
          <i className="fas fa-gamepad"></i>
          <span> Jeux vidéos</span>
        </li>
        <li>
          <i className="fas fa-drum"></i>
          <span> Musique </span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
