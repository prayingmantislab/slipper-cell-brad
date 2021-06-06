import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronRight from '@material-ui/icons/ChevronRight';
import axios from 'axios';


const Dashboard = () => {
  const [data, setData] = useState([]);
  const columns = [
    
      {
        title: 'Id',
        field: '_id',
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
  ]
  useEffect(() => {
    axios.get(
      'http://127.0.0.1:5000/api/stats'
    )
    .then((resp) =>{
       console.log(resp.data)
       
       return resp.data
    })
    .then(data => {
      
      setData(data)
    });
  },[])
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
     data={data}
     columns={columns}
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
