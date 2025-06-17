import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function Library() {
  return (
    <Room
      title="Библиотека"
      description="Полки до потолка. Тишина. Только шелест страниц нарушает покой..."
      links={[
        { to: '/great-hall', label: 'В Большой Зал' },
        { to: '/owlery', label: 'В совятню' },
      ]}
    >
      <div className="room-bg library" />
    </Room>
  );
}

export default Library;
