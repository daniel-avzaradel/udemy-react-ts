import React, { useState } from 'react';

const users = [
  { name: 'Sarah', age: 23 },
  { name: 'Daniel', age: 27 },
  { name: 'Dave', age: 22 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<undefined | { name: string; age: number }>();

  const onClick = () => {
    const foundUser = users.filter((user) => {
      if (user.name === name) {
        console.log(user);
        setUser(user);
      }
    });
  };
  return (
    <div>
      <h3>User Search:</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find</button>
      <div>
        {user === undefined ? (
          ''
        ) : (
          <>
            <br></br>
            User name: {user.name}
            <br />
            age: {user.age}
          </>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
