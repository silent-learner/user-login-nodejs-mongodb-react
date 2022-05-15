import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
// import { valueToPercent } from '@mui/base';

// Generate Order Data
function createData(id, xValue, yValue) {
  return { id, xValue, yValue};
}

const rows = [
  createData(
    0,
    '24:00', 
    'undefined'
  ),
  createData(
    1,
    '21:00',
    '2400'
  ),
  createData(
    2, 
    '19:00', 
    '2400'
  ),
  createData(
    3,
    '18:00', 
    '2400'
  ),
  createData(
    4,
    '15:00', 
    '2000'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Values</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>X-values</TableCell>
            <TableCell>Y-values</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.xValue}</TableCell>
              <TableCell>{row.yValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more values
      </Link>
    </React.Fragment>
  );
}