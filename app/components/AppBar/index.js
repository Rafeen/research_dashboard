/**
 *
 * Appbar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled as styledMaterial } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const CustomAppBar = styledMaterial(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function AppBar({ openDrawer, toggleDrawer }) {
  return (
    <CustomAppBar position="absolute" open={openDrawer}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
          position: 'fixed',
          width: '97%',
          backgroundColor: 'white',
        }}
      >
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(openDrawer && { display: 'none' }),
          }}
        >
          <MenuIcon sx={{ color: '#1a2038', fontSize: 30 }} />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="#1a2038"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
      </Toolbar>
    </CustomAppBar>
  );
}

AppBar.propTypes = {
  openDrawer: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default memo(AppBar);
