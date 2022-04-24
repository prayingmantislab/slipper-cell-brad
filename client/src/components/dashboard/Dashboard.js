// import React, { Fragment, useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import axios from 'axios';
// import { formattedItemsUtil } from '../../utils/formatDate';
// import Paper from '@material-ui/core/Paper';
// import { IP } from './sleepercellbrad-config';
// import { columns } from './tableConfig';

// const baseUrl =
//   process.env.NODE_ENV === 'production'
//     ? 'https://slipper-cell.onrender.com'
//     : `http://${IP.cell}`;

// console.log(`baseUrl:${baseUrl}`);

// const Dashboard = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [rows, setRows] = useState([]);

//   const updateData = async (date) => {
//     try {
//       const { data } = await axios.get(
//         `${baseUrl}/api/form-stats?startDate=${date.toISOString()}`
//       );
//       const avg = await axios.post(`${baseUrl}/api/avg`, {
//         selectedDate: JSON.stringify(date),
//       });
//       //fetch light stats... insert to state.
//       console.log(data, avg.data);
//       const formattedItems = formattedItemsUtil(data, avg.data);
//       setRows(formattedItems);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     updateData(selectedDate);
//   }, [selectedDate]);
//   //
//   return (
//     <Fragment>
//       <h3>Change date to show result</h3>
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => setSelectedDate(date)}
//       />
//       <TableContainer component={Paper} style={{ marginTop: 20 }}>
//         <Table style={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               {columns.map((col, index) => {
//                 return (
//                   <TableCell key={index} align="left">
//                     {col}
//                   </TableCell>
//                 );
//               })}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row, index) => (
//               <TableRow key={`${row.name}${index}`}>
//                 <TableCell align="left">{row.email}</TableCell>
//                 <TableCell align="left">{row.date}</TableCell>
//                 <TableCell align="left">{row.name}</TableCell>
//                 <TableCell align="left">{row.sleepTime}</TableCell>
//                 <TableCell align="left">{row.wakeTime}</TableCell>
//                 <TableCell align="left">{row.totalSleep}</TableCell>
//                 <TableCell align="left">{row.sleepScore}</TableCell>
//                 <TableCell align="left">{row.averageLight}</TableCell>
//                 <TableCell align="left">{row.averageNoise}</TableCell>
//                 <TableCell align="left">{row.deepSleep}</TableCell>
//                 <TableCell align="left">{row.lightSleep}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Fragment>
//   );
// };

// export default Dashboard;
