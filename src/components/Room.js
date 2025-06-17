// src/components/Room.js или src/rooms/Room.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../rooms/RoomStyles.css';

const Room = ({ title, description, backgroundImage, children, links = [] }) => {
  return (
    <div
      className="room"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="room-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {children}

        {links.length > 0 && (
          <div className="navigation-links">
            {links.map((link, index) => (
              <Link key={index} to={link.to} className="room-link">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Room;
