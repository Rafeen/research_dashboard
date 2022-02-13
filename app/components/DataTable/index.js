/**
 *
 * DataTable
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { Columns, HealthData } from './healthData';

function DataTable() {
  return (
    <DataGrid
      rows={HealthData} // expects an array of objects
      columns={Columns} // expects an array of objects
    />
  );
}

DataTable.propTypes = {};

export default memo(DataTable);
