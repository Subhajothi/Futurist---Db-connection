import React, { useState } from 'react';
import { AboutMenu } from './AboutMenu';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function AboutDropdown() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {AboutMenu.map((item, index) => {
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

export default AboutDropdown;
