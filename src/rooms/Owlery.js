import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function Owlery() {
  return (
    <Room
      title="Соваятня"
      description="Запах перьев, звуки уханья. Совы наблюдают за тобой..."
      links={[
        { to: '/tower', label: 'В башню' },
        { to: '/library', label: 'В библиотеку' },
      ]}
    >
      <div className="room-bg owlery" />
    </Room>
  );
}

export default Owlery;
