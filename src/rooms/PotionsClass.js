import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function PotionsClass() {
  return (
    <Room
      title="Кабинет зелий"
      description="Темно, пахнет травами и зельями. Где-то капает зелье..."
      links={[
        { to: '/dungeon', label: 'К подземелью' },
        { to: '/forest', label: 'В лес' },
      ]}
    >
      <div className="room-bg potions" />
    </Room>
  );
}

export default PotionsClass;
