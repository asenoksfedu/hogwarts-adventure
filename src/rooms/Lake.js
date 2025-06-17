import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function Lake() {
  return (
    <Room
      title="Озеро"
      description="Озеро спокойно. Ты видишь что-то под поверхностью..."
      links={[
        { to: '/forest', label: 'В лес' },
        { to: '/quidditch', label: 'На квиддич поле' },
      ]}
    >
      <div className="room-bg lake" />
    </Room>
  );
}

export default Lake;
