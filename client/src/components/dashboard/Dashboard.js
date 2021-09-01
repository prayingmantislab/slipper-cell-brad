import React, { Fragment, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { formattedItemsUtil } from '../../utils/formatDate';
import Paper from '@material-ui/core/Paper';
import { IP } from './sleepercellbrad-config';
import { colums } from './tableConfig';

// const baseUrl = `http://${IP.liran}/api`;
const baseUrl = `http://localhost:5000/api`;

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rows, setRows] = useState([]);

  const updateData = async (date) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/form-stats?startDate=${date.toISOString()}`
      );

      const { avg } = await axios.post(`${baseUrl}/avg`, date);
      data.avg = avg;
      const formattedItems = formattedItemsUtil(data);
      setRows(formattedItems);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    updateData(selectedDate);
  }, [selectedDate]);
  //
  return (
    <Fragment>
      <h3>Change date to show result</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table style={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {colums.map((col, index) => {
                return (
                  <TableCell key={index} align="left">
                    {col}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={`${row.name}${index}`}>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.light}</TableCell>
                <TableCell align="left">{row.noise}</TableCell>
                <TableCell align="left">{row.sleepTime}</TableCell>
                <TableCell align="left">{row.wakeTime}</TableCell>
                <TableCell align="left">{row.totalSleep}</TableCell>
                <TableCell align="left">{row.sleepScore}</TableCell>
                <TableCell align="left">{row.average}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Dashboard;
