import React from 'react';
import { useNavigate } from 'react-router-dom';
import Room from '../components/Room';
import './RoomStyles.css';

function Forest() {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("Ты нашёл волшебную палочку!");
    navigate("/victory");
  };

  return (
    <Room
      title="Запретный лес"
      description="Здесь темно и страшно. Давай ты быстрее тут всё проверишь и мы пойдём?"
      links={[
        { to: '/hall', label: 'В Большой Зал' },
        { to: '/lake', label: 'К озеру' },
        { to: '/quidditch', label: 'На поле для квиддича' },
      ]}
    >
      <div className="room-bg forest" />
      <img
        src="/wand.png"
        alt="Палочка"
        className="wand-fixed"
        onClick={handleClick}
      />
    </Room>
  );
}

export default Forest;