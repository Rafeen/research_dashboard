/**
 *
 * PrivateRoute
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import {
  styled as styledMaterial,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SidebarData from './SidebarData';

const drawerWidth = 240;

const AppBar = styledMaterial(MuiAppBar, {
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

const Drawer = styledMaterial(MuiDrawer, {
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

const mdTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          boxShadow: 'none',
          backgroundColor: 'white',
        },
      },
    },
  },
});

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

function DashboardContent({ children }) {
  const [openDrawer, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* this is navbar */}
        <AppBar position="absolute" open={openDrawer}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
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
        </AppBar>
        {/* sidebar drawer */}
        <Drawer variant="permanent" open={openDrawer}>
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
              <DrawerContent
                item={item}
                key={item.path}
                openDrawer={openDrawer}
              />
            ))}

            {/* items end */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          {/* spacer navbar and main body */}
          <Toolbar />

          {/* Main Body */}
          <Container maxWidth="auto" sx={{ mt: 4, mb: 4 }}>
            {/* input section */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={5} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                />
              </Grid>

              {/* main body section */}
              <Grid item xs={12} md={7} lg={8}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {children}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function PrivateRoute({ children }) {
  return <DashboardContent>{children}</DashboardContent>;
}

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

DashboardContent.propTypes = {
  children: PropTypes.object.isRequired,
};

DrawerContent.propTypes = {
  item: PropTypes.object,
  openDrawer: PropTypes.bool,
};
