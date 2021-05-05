import React, { useState } from 'react';
import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronRight from '@material-ui/icons/ChevronRight';

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
      data={[
        {
          id: 1,
          parentOnly: 'Parent 1',
          date: '4/5/21',
          name: 'Parent 1',
          value: 'SomeParentValue',
          light: 123,
          noise: 321,
          sleepTime: '23:00',
          wakeTime: '6:00',
          totalSleep: '7hr',
          sleepScore: 90,
        },
        {
          id: 1,
          time: '18:00',
          name: 'Child 1',
          value: 'child Value',
          light: 123,
          noise: 321,
          sleepTime: '23:00',
          wakeTime: '6:00',
          totalSleep: '7hr',
          sleepScore: 90,
          parentId: 1,
        },
        {
          id: 1,
          time: '19:00',
          name: 'Child 1',
          light: 123,
          noise: 321,
          sleepTime: '23:00',
          wakeTime: '6:00',
          totalSleep: '7hr',
          sleepScore: 90,
          parentId: 1,
        },
        {
          id: 1,
          time: '20:00',
          name: 'Child 1',
          light: 123,
          noise: 321,
          sleepTime: '23:00',
          wakeTime: '6:00',
          totalSleep: '7hr',
          sleepScore: 90,
          parentId: 1,
        },
        {
          id: 2,
          parentOnly: 'Parent 2',
          date: '4/5/21',
          name: 'Parent 2',
          light: 123,
          noise: 321,
          sleepTime: '23:00',
          wakeTime: '5:00',
          totalSleep: '6hr',
          sleepScore: 95,
        },
        {
          id: 2,
          time: '18:00',
          name: 'Child 2',
          light: 123,
          noise: 321,
          sleepTime: '23:00',
          wakeTime: '5:00',
          totalSleep: '6hr',
          sleepScore: 95,
          parentId: 2,
        },
        {
          id: 2,
          time: '19:00',
          name: 'Child 2',
          light: 123,
          noise: 321,
          sleepTime: '23:00',
          wakeTime: '5:00',
          totalSleep: '6hr',
          sleepScore: 95,
          parentId: 2,
        },
        {
          id: 2,
          time: '20:00',
          name: 'Child 2',
          light: 123,
          noise: 321,
          sleepTime: '23:00',
          wakeTime: '5:00',
          totalSleep: '6hr',
          sleepScore: 95,
          parentId: 2,
        },
      ]}
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
