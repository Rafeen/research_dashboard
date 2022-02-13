/**
 *
 * PrivateRoute
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import AppBar from '../AppBar/Loadable';
import Drawer from '../Drawer/Loadable';
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
function DashboardContent({ children }) {
  const [openDrawer, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        {/* this is navbar */}
        <AppBar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
        {/* sidebar drawer */}
        <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
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
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function PrivateRoute({ children }) {
  return <DashboardContent>{children}</DashboardContent>;
}

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

DashboardContent.propTypes = {
  children: PropTypes.object.isRequired,
};

export default memo(PrivateRoute);
