import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown1 from './HomeDropdown';
import Dropdown2 from './EventDropdown';
import Dropdown3 from './CommunityDropdown';
import Dropdown4 from './AboutDropdown';
import logo from './images/logoCog.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);


  //const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };


  return (
    <>
    <div className="header-container">
          <div className="header-image-container">
            <img className="header-image" src={logo} alt="logo" />
          </div>
      <nav className='navbar'>        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Home <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/events'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Events <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/communityhome'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Community <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <Dropdown3 />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter4}
            onMouseLeave={onMouseLeave4}
          >
            <Link
              to='/abouthome'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About <i className='fas fa-caret-down' />
            </Link>
            {dropdown4 && <Dropdown4 />}
          </li>          
        </ul>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
