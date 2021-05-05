import React, { useState } from 'react';
import MaterialTable from 'material-table';

const Dashboard = () => {
  const [data, setData] = useState([
    {
      userId: 123,
      date: '4/5/21',
      name: 'Luka Duncic',
      light: 123,
      noise: 321,
      sleepTime: '23:00',
      wakeTime: '6:00',
      totalSleep: '7hr',
      sleepScore: 90,
    },
    {
      userId: 124,
      date: '4/5/21',
      name: 'Steph Curry',
      light: 123,
      noise: 321,
      sleepTime: '23:00',
      wakeTime: '5:00',
      totalSleep: '6hr',
      sleepScore: 95,
    },
  ]);
  return (
    <div>
      <MaterialTable
        options={{
          grouping: true,
        }}
        columns={[
          {
            title: 'User Id',
            field: 'userId',
            type: 'numeric',
          },
          {
            title: 'Date',
            field: 'date',
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
        data={data}
      />
    </div>
  );
};

export default Dashboard;
