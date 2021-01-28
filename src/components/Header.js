import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
