import React, { useState } from 'react';

export const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event, 'Im being dragged');
  };

  return (
    <div>
      <input type="text" onChange={(e) => console.log(e)} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};
