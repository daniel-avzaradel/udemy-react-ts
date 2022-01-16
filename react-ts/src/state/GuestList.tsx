import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  const clear = () => {
    setGuests([]);
  };

  return (
    <div>
      <h3>Guest List:</h3>
      <ul>
        {guests.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
      <button
        onClick={clear}
        style={{ display: 'block', padding: '4px 12px', marginTop: '10px' }}
      >
        Clear
      </button>
    </div>
  );
};

export default GuestList;
