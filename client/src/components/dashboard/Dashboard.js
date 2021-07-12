import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronRight from '@material-ui/icons/ChevronRight';
import axios from 'axios';
import moment from 'moment';
import { IP } from './sleepercellbrad-config';

const baseUrl = `http:${IP.asi}/api`;
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
  ];
  useEffect(() => {
    // const urlLiran = 'http://192.168.1.243:5000/api/form-stats';
    //const urlCell = 'http://192.168.43.63:5000/api/stats';

    //  const urlAsi = 'http://10.0.0.6:5000/api/stats';
    // const urlOffice = 'http://192.168.1.8:5000/api/stats';
    // const urlOffice = 'http://192.168.1.243:5000/api/stats';

    async function fetchData() {
      debugger
      const { data } = await axios.get(baseUrl + '/form-stats');
      const fomattedItems = data.map((item) => {
        debugger;
        const formattedWakeTime = moment(item.wakeTime).format('HH:mm');
        const formattedSleepTime = moment(item.sleepTime).format('HH:mm');
        const momentWakeTime = moment(item.wakeTime);
        const momentSleepTime = moment(item.sleepTime);
        const momentDate = moment(item.time).format('DD MM YYYY');
        const momentTime = moment(item.time).format('HH:mm');

        const diffTotalSleep = momentWakeTime.diff(momentSleepTime, 'hours');
        console.log('---caclulate----');
        console.log(
          `${momentWakeTime} DIFF ${momentSleepTime} =${diffTotalSleep}`
        );
        console.log('-----------');

        const newItem = {
          ...item,
          wakeTime: formattedWakeTime,
          sleepTime: formattedSleepTime,
          totalSleep: diffTotalSleep,
          time: momentTime,
          date: momentDate,
        };
        return newItem;
      });

      setData(fomattedItems);
    }

    fetchData();
  }, []);
  return (
    <MaterialTable
      style={{ width: '100%', margin: '3%' }}
      title="Sleep Experiment Data"
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
