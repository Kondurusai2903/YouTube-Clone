import React from 'react';

const ButtonList = () => {
  return (
    <div>
      <ul className="flex gap-4 p-2 m-2">
        <li className="px-2 py-1 bg-gray-200 rounded-lg">All</li>
        <li className="px-2 py-1 bg-gray-200 rounded-lg">Music</li>
        <li className="px-2 py-1 bg-gray-200 rounded-lg">Tamil</li>
        <li className="px-2 py-1 bg-gray-200 rounded-lg">Podocasts</li>
        <li className="px-2 py-1 bg-gray-200 rounded-lg">
          Software Engineering
        </li>
      </ul>
    </div>
  );
};

export default ButtonList;
