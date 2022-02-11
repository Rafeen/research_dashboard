/**
 *
 * Sidebar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SidebarData from './SidebarData';
import Submenu from '../Submenu/Loadable';

const SidebarNav = styled.nav`
  background: #15171c;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 0.35s;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding-top: 80px;
`;

function Sidebar({ sidebar }) {
  return (
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        {SidebarData.map(item => (
          <Submenu item={item} key={item.path} />
        ))}
      </SidebarWrap>
    </SidebarNav>
  );
}

Sidebar.propTypes = {
  sidebar: PropTypes.bool,
};

export default memo(Sidebar);
