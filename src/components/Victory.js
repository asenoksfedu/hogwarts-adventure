import React from 'react';
import { Link } from 'react-router-dom';
import './Victory.css';

function Victory() {
  return (
    <div className="victory-container">
      <div className="victory-content">
        <h1>🎉 Поздравляем! 🎉</h1>
        <p>Ты нашёл волшебную палочку Гарри Поттера и спас Гарри Поттера!</p>
        <Link to="/" className="victory-button">Играть снова</Link>
      </div>
    </div>
  );
}

export default Victory;
