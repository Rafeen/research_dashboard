/**
 *
 * Drawer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MuiDrawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { styled as styledMaterial } from '@mui/material/styles';
import SidebarData from './SidebarData';
import DrawerContent from '../DrawerContent';

const drawerWidth = 240;
const CustomDrawer = styledMaterial(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    color: 'white',
    backgroundColor: '#1a2038',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      borderRight: 0,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(0),
      },
    }),
  },
}));

function Drawer({ openDrawer, toggleDrawer }) {
  return (
    <CustomDrawer variant="permanent" open={openDrawer}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton sx={{ color: 'white' }} onClick={toggleDrawer}>
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Toolbar>
      <List component="nav">
        {/* items */}

        {SidebarData.map(item => (
          <DrawerContent item={item} key={item.path} openDrawer={openDrawer} />
        ))}

        {/* items end */}
      </List>
    </CustomDrawer>
  );
}

Drawer.propTypes = {
  openDrawer: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default memo(Drawer);
