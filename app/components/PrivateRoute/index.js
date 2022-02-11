/**
 *
 * PrivateRoute
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from '../Navbar/Loadable';
import Sidebar from '../Sidebar/Loadable';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  background: white;
  padding-left: ${({ sidebar }) => (sidebar ? 'calc(250px + 24px)' : '24px')};
  transition: 0.35s;
  text-align: center;
`;

function PrivateRoute(props) {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <Wrapper sidebar={sidebar}>{props.children}</Wrapper>
    </>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(PrivateRoute);
