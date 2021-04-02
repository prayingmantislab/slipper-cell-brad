import React, { useState } from 'react';
import MaterialTable from 'material-table';


const Dashboard = () => {
  const [data, setData] = useState([
    {name: " Pila p ", job: "Rapper", age:45 }
  ]);
  return (
    <div>
      <MaterialTable
        columns={[
          {
            title: "Name",
            field: "name"
          },
          {
            title:"Ocupation",
            field: "job"
          },
          {
            title: "Age",
            field: "age",
            type: "numeric"
          }
        ]}
        data={data}
        
      />
    </div>
  );
};

export default Dashboard;
