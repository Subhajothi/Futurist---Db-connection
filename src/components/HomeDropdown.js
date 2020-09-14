import React, { useState } from 'react';
import { HomeMenu } from './HomeMenu';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function HomeDropdown() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {HomeMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(true)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HomeDropdown;
