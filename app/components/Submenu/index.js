/**
 *
 * Submenu
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import * as Icons from '@mui/icons-material';

const rotateDown = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(90deg);
  }
`;

const rotateUp = keyframes`
  from {
    transform: rotate(90deg);
  }

  to {
    transform: rotate(0deg);
  }
`;
const RotateDown = styled.div`
  display: inline-block;
  animation: ${rotateDown} 0.2s linear forwards;
`;

const RotateUp = styled.div`
  display: inline-block;
  animation: ${rotateUp} 0.2s linear forwards;
`;

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }

  &:focus {
    background: #252831;
    border-left: 4px solid #632ce4;
  }

  &.selected {
    background: #252831;
    border-left: 4px solid #632ce4;
  }
`;

const Dropdown = styled.div`
  max-height: ${({ subnav }) => (subnav ? '0px' : '300px')};
  overflow: hidden;
  -webkit-transition: max-height 0.35s ease-in;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  /* background: #414757; */
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    color: #632ce4;
    cursor: pointer;
  }

  &:focus {
    background: #252831;
    border-left: 4px solid #632ce4;
  }

  &.selected {
    background: #252831;
    border-left: 4px solid #632ce4;
  }
`;

function Submenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const location = useLocation();

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        className={location.pathname === item.path ? 'selected' : ''}
      >
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
        <div>
          {item.subNav.length !== 0 && subnav ? (
            <RotateUp>
              <Icons.KeyboardArrowRight />
            </RotateUp>
          ) : null}
          {item.subNav.length !== 0 ? (
            <RotateDown>
              <Icons.KeyboardArrowRight />
            </RotateDown>
          ) : null}
        </div>
      </SidebarLink>
      <Dropdown subnav={subnav}>
        {item.subNav.map(subItem => (
          <DropdownLink
            key={subItem.path}
            to={subItem.path}
            className={location.pathname === subItem.path ? 'selected' : ''}
          >
            {subItem.icon}
            <SidebarLabel>{subItem.title}</SidebarLabel>
          </DropdownLink>
        ))}
      </Dropdown>
    </>
  );
}

Submenu.propTypes = {
  item: PropTypes.object,
};

export default memo(Submenu);
