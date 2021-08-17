// import 'date-fns';
import React, { Fragment, useState, useEffect } from 'react';
// import { alpha } from '@material-ui/core/styles'
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
import MomentUtils from '@date-io/moment';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

// import TextField from '@material-ui/core/TextField';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DatePicker from '@material-ui/lab/DatePicker';

import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronRight from '@material-ui/icons/ChevronRight';
import axios from 'axios';
import moment from 'moment';
import { IP } from './sleepercellbrad-config';
// import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
// import { DialogContent } from '@material-ui/core';

// import MomentUtils from '@date-io/moment';
import { columns } from './columns';

const baseUrl = `http://${IP.asi}/api`;

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);

  const handleDateChange = (date) => {
  setSelectedDate(date);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        baseUrl + `/form-stats?startDate=${selectedDate.toISOString()}`
      );

      const fomattedItems = data.map((item) => {
        const formattedWakeTime = moment(item.wakeTime).format('HH:mm');
        const formattedSleepTime = moment(item.sleepTime).format('HH:mm');
        const momentWakeTime = moment(item.wakeTime);
        const momentSleepTime = moment(item.sleepTime);
        const momentDate = moment(item.sleepTime).format('DD MM YYYY');
        const momentTime = moment(item.sleepTime).format('HH:mm');
        const userName = item.userName;
        const userEmail = item.userEmail;

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
          name: userName,
          email: userEmail,
        };
        return newItem;
      });

      setData(fomattedItems);
    }
    fetchData();
  }, [selectedDate]);
  return (
    // <MuiPickersUtilsProvider utils={MomentUtils}>
    //   <Grid container justifyContent="space-around">
     <Fragment>
     {/* <KeyboardDatePicker > */}
    {/* //     margin="normal"
    //     id="date-picker-dialog"
    //     format="MM/dd/yyyy"
    //     value={selectedDate}
    //     onChange={handleDateChange}
    //     KeyboardButtonProps={{ */}
    {/* //       'aria-label' :'change date',
    //     }}
    //   /> */}
    {/* <form noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        value={selectedDate.toISOString().split('T')[0]}
        onChange={(event)=>{setSelectedDate(new Date(event.target.value))}}
      />
    </form>
     */}
     <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
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
    </Fragment>
    // </Grid>

    // </MuiPickersUtilsProvider>
    
  );
};

export default Dashboard;
