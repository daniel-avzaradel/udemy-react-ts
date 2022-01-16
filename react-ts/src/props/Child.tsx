import React from 'react';

interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return (
    <div>
      <h2>Child color: {color}</h2>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
