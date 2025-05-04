import React from 'react';
import { useParams } from 'react-router-dom';

const users = {
  1: 'Alice',
  2: 'Bob',
  3: 'Charlie',
};

const UserDetails = () => {
  const { userId } = useParams();
  const userName = users[userId];

  return (
    <div>
      {userName ? (
        <h2>Details of {userName}</h2>
      ) : (
        <h2>User not found</h2>
      )}
    </div>
  );
};

export default UserDetails;
