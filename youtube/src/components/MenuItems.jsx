import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = () => {
  return (
    <div className="shadow-lg pl-2">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Short</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h4 className="font-bold py-2">Subscriptions</h4>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h4 className="font-bold py-2">Watch later</h4>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default MenuItems;
