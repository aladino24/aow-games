import React from "react";
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to RoomWar</h1>
          <p>Join the ultimate battlefield and conquer the world!</p>
          <a href="/lobby" className="btn btn-primary">Join the Lobby</a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
