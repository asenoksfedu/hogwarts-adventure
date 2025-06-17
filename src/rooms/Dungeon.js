import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function Dungeon() {
  return (
    <Room
      title="Подземелья"
      description="Темно и сыро. Стены покрыты мхом. Ты слышишь шорох..."
      links={[
        { to: '/great-hall', label: 'В Большой Зал' },
        { to: '/potions', label: 'К кабинету зелий' },
      ]}
    >
      <div className="room-bg dungeon" />
    </Room>
  );
}

export default Dungeon;
