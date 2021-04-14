import React, { useState } from 'react';
import MaterialTable from 'material-table';


const Dashboard = () => {
  const [data, setData] = useState([
    {name: "Liran", sleepScore: 45, sleepTime :'23:00', wakeTime: '5:00',totalSleep:6, noise: 0.92, light: 23 },
    {name: "Asi", sleepScore: 95, sleepTime :'23:00', wakeTime: '7:00',totalSleep:8, noise: 0.52, light: 40 },
    {name: "Hasan", sleepScore: 98, sleepTime :'1:00', wakeTime: '6:00',totalSleep:5, noise: 0.52, light: 40 }
  ]);
  return (
    <div>
      <MaterialTable
        columns={[
          {
            title: "Name",
            field: "name",
            type: 'text'
          },
          {
            title:"Sleep score",
            field: "sleepScore",
            type: 'number'
          },
          {
            title: "Sleep Time",
            field: "sleepTime",
            type: "time"
          },
          {
            title:"Wake Time",
            field: "wakeTime",
            type: 'time'
          },
          {
            title:"Total Sleep",
            field: "totalSleep",
            type: 'number'
          },
          {
            title: "Noise(avg)",
            field: "noise",
            type: "number"
          },
        {
          title: "Light(avg)",
          field: "light",
          type: "number"
        }

        ]}
        data={data}
        
      />
    </div>
  );
};

export default Dashboard;
