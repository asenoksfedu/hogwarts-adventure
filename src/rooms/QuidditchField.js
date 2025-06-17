import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function QuidditchField() {
  return (
    <Room
      title="Квиддич поле"
      description="Поле пустует. Ты слышишь ветер и звуки мётел..."
      links={[
        { to: '/lake', label: 'К озеру' },
        { to: '/great-hall', label: 'В Большой Зал' },
      ]}
    >
      <div className="room-bg quidditch" />
    </Room>
  );
}

export default QuidditchField;
