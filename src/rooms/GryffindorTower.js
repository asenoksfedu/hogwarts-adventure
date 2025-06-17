import React from 'react';
import Room from '../components/Room';
import './RoomStyles.css';

function GryffindorTower() {
  return (
    <Room
      title="Башня Гриффиндора"
      description="Тёплая комната с камином и флагами Гриффиндора."
      links={[
        { to: '/great-hall', label: 'В Большой Зал' },
        { to: '/owlery', label: 'В совятню' },
      ]}
    >
      <div className="room-bg tower" />
    </Room>
  );
}

export default GryffindorTower;
