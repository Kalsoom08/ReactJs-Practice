import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 28 },
    { id: 5, name: "Emma", age: 26 },
    { id: 6, name: "Frank", age: 32 }
  ];

  return (
    <div>
      <ul className="flex flex-col justify-center">
        {users.map((user) => {
          return (
            <li key={user.id} className="border border-black p-4 mb-2">
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <Link to={`/detail/${user.id}`} className="text-blue-500 underline">
                Details
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
