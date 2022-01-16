import React from 'react';

interface ChildProps {
  color: string;
}

function Child({ color }: ChildProps) {
  return (
    <div>
      <h2>Child color: {color}</h2>
    </div>
  );
}

export default Child;
