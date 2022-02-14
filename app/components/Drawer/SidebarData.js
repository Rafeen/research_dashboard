import React from 'react';
import * as Icons from '@mui/icons-material';

const SidebarData = [
  {
    title: 'Charts',
    path: '/charts',
    dropOpen: <Icons.KeyboardArrowDown />,
    icon: <Icons.BarChartOutlined />,
    subNav: [
      {
        title: 'Pie Charts',
        path: '/charts/pie',
        icon: <Icons.PieChart />,
      },
      {
        title: 'Bar Charts',
        path: '/healthstatus',
        icon: <Icons.BarChart />,
      },
      {
        title: 'Scatter Charts',
        path: '/charts/scatter',
        icon: <Icons.ScatterPlot />,
      },
    ],
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <Icons.PermIdentityOutlined />,
    subNav: [
      {
        title: 'Pie Charts',
        path: '/profile/settings',
        icon: <Icons.PieChart />,
      },
    ],
  },
  {
    title: 'Datatable',
    path: '/datatable',
    icon: <Icons.LogoutOutlined />,
    subNav: [],
  },
  {
    title: 'Login',
    path: '/login',
    icon: <Icons.LoginOutlined />,
    subNav: [],
  },
];

export default SidebarData;
