import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function GreatHall() {
  return (
    <Room
      title="Большой Зал"
      description="Ты в центре замка. Над тобой парят свечи и магический потолок."
      links={[
        { to: '/dungeon', label: 'В подземелья' },
        { to: '/tower', label: 'В башню Гриффиндора' },
        { to: '/library', label: 'В библиотеку' },
        { to: '/dumbledore-office', label: 'В кабинет Дамблдора' },
        { to: '/quidditch', label: 'На квиддич поле' },
      ]}
    >
      <div className="room-bg hall" />
    </Room>
  );
}

export default GreatHall;
