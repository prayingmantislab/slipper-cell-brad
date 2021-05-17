import React, { useState } from 'react';
import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronRight from '@material-ui/icons/ChevronRight';
import mockData from './mockData';


const Dashboard = () => {
  return (
    <MaterialTable
      style={{ width: '100%', margin: '3%' }}
      title='Sleep Experiment Data'
      icons={{
        Filter: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
        Search: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
        ResetSearch: React.forwardRef((props, ref) => (
          <RotateLeftIcon ref={ref} />
        )),
        SortArrow: ArrowUpward,
        DetailPanel: ChevronRight,
      }}
      columns={[
        {
          title: 'Id',
          field: 'id',
          type: 'numeric',
        },
        {
          title: 'Date',
          field: 'date',
        },
        {
          title: 'Time',
          field: 'time',
        },
        {
          title: 'Full Name',
          field: 'name',
          type: 'string',
        },
        {
          title: 'Light',
          field: 'light',
          type: 'numeric',
        },
        {
          title: 'Noise',
          field: 'noise',
          type: 'numeric',
        },
        {
          title: 'Sleep Time',
          field: 'sleepTime',
          type: 'numeric',
        },
        {
          title: 'Wake Time',
          field: 'wakeTime',
          type: 'numeric',
        },
        {
          title: 'Total Sleep',
          field: 'totalSleep',
          type: 'numeric',
        },
        {
          title: 'Sleep Score',
          field: 'sleepScore',
          type: 'numeric',
        },
      ]}
      data={mockData}
      parentChildData={(row, rows) => rows.find((a) => a.id === row.parentId)}
      options={{
        paging: false,
        headerStyle: {
          backgroundColor: '#378FC3',
          color: '#FFF',
          fontSize: '17px',
          textAlign: 'center',
          fontWeight: 'bold',
        },
        rowStyle: (rowData) => ({
          backgroundColor: !!rowData.parentOnly ? '#EEE' : '#d1cfcf',
        }),
      }}
    />
  );
};

export default Dashboard;
