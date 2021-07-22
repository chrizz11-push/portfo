import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { animateScroll as scroll, Link } from "react-scroll"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  // NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            {/* <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              ULTRA
            </NavLogo> */}

            <NavLogo to='/'
            onClick={()=> {
              scroll.scrollToTop()}}
            // onClick={closeMobileMenu}
            >
              <NavIcon />
              CHRIZZ
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              
              <NavItem to="/"
              onClick={()=> {
                scroll.scrollToTop()}}
              >
                Home
              </NavItem>

              <Link to="Services"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-70}>
              <NavItem>
                Services
              </NavItem>
              </Link>

              <Link to="Testimony"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-70}>
              <NavItem>
                Testimony
              </NavItem>
              </Link>

              
              
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;




{/* <Link to="Home"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-70}>
            <div>Home</div>
            </Link>
            <Link to="Homescreen"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-70}
            >
            <div>Homescreen</div>
            </Link>
            <Link to="Project"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-70}
            >
            <div>Project</div>
            </Link>
            <Link to="Galleries"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-70}
            >
            <div>Galleries</div>
            </Link>
            <Link to="Footer"
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={-70}
            >
            <div>Footer</div>
            </Link> */}


//             echo "# chrizzport" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/chrizz11-push/chrizzport.git
// git push -u origin main