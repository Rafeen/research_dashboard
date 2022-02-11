/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import { NavLink as Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const Icon = styled(MenuIcon)`
  color: #15171c;
  transform: scale(1.8);
`;

const NavLink = styled(Link)`
  margin-left: ${({ shownav }) => (shownav === 1 ? 'calc(232px)' : '2rem')};
  font-size: 2rem;
  height: 80px;
  display: flex;
  transition: all 0.35s;
  align-items: center;
`;

const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function Navbar({ sidebar, toggleSidebar }) {
  return (
    <Nav>
      <NavLink shownav={sidebar ? 1 : 0} to="#">
        <Icon onClick={toggleSidebar} />
      </NavLink>
    </Nav>
  );
}

Navbar.propTypes = {
  sidebar: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

export default memo(Navbar);
