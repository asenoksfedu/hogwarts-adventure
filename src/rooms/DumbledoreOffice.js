import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function DumbledoreOffice() {
  return (
    <Room
      title="Кабинет Дамблдора"
      description="Тишина. Фоукс сидит в углу. Всё кажется... магическим."
      links={[
        { to: '/great-hall', label: 'В Большой Зал' },
        { to: '/tower', label: 'В башню' },
      ]}
    >
      <div className="room-bg dumbledore" />
    </Room>
  );
}

export default DumbledoreOffice;
