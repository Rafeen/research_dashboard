/**
 *
 * DrawerContent
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const DrawerItem = styled(ListItemButton)`
  &:hover {
    color: #632ce4;
    cursor: pointer;
  }

  &:focus {
    color: ${({ expanded }) => (expanded === 1 ? '#632ce4' : '')};
    border-left: 4px solid #632ce4;
  }

  &.selected {
    background: #252831;
    border-left: 4px solid #632ce4;
  }
`;

function DrawerContent({ item, openDrawer }) {
  const [openDropDown, setDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setDropDownOpen(!openDropDown);
  };

  const location = useLocation();
  let dropdownIcon = null;

  if (item.subNav.length !== 0 && openDropDown) {
    dropdownIcon = <ExpandLess />;
  } else if (item.subNav.length !== 0) {
    dropdownIcon = <ExpandMore />;
  }

  return (
    <>
      <DrawerItem
        href={item.path}
        onClick={item.subNav && toggleDropDown}
        className={location.pathname === item.path ? 'selected' : ''}
        to={item.subNav.length === 0 ? item.path : '#'}
        component={Link}
        expanded={openDropDown ? 1 : 0}
      >
        <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography type="body2" style={{ fontSize: 18 }}>
              {item.title}
            </Typography>
          }
        />

        {dropdownIcon}
      </DrawerItem>
      <Collapse in={openDropDown && openDrawer} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subNav.map(subItem => (
            <DrawerItem
              key={subItem.path}
              sx={{ pl: 4 }}
              className={location.pathname === subItem.path ? 'selected' : ''}
              to={subItem.path}
              component={Link}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {subItem.icon}
              </ListItemIcon>
              <ListItemText primary={subItem.title} />
            </DrawerItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}

DrawerContent.propTypes = {
  openDrawer: PropTypes.bool,
  item: PropTypes.object,
};

export default memo(DrawerContent);
