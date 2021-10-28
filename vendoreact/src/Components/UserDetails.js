import * as React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Phone', 1315092923),
  createData('email', "walter@gmail.com"),
  createData('bkash', 1315092923),
  createData('Nagad', 1315092923),
  createData('Rocket', 1315092923),
];


export default function UserDetails() {
  const [user, setuser] = useState([]);
      const mount = async () => {
        const res = await axios.get('http://localhost:8000/api/user/Homepage');
        console.log(res.data);
        
        if (res.status === 200) {
            setuser(res.data)
            
        }
  }
  
    useEffect(() => {
    mount();
        
     }, []);
    return (
        <>
    <div style={{
        display: 'flex', justifyContent: 'center'
      }}>
    <Stack direction="row" spacing={2}>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Stack>
    </div>
    
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {
              user.map((e) => {
                return (
                  <TableHead key={e.id}>
              <TableRow>
                <TableCell>Name</TableCell>
                      <TableCell align="right">{e.name}</TableCell>
            
                    </TableRow>
                    <TableRow>
                <TableCell>Phone</TableCell>
                      <TableCell align="right">{e.phone}</TableCell>
                
                    </TableRow>
                    
                     <TableRow>
                <TableCell>email</TableCell>
                      <TableCell align="right">{e.email}</TableCell>
                
                    </TableRow>
                     <TableRow>
                <TableCell>bkash</TableCell>
                      <TableCell align="right">{e.bkash}</TableCell>
                
                    </TableRow>
                         <TableRow>
                <TableCell>Nagad</TableCell>
                      <TableCell align="right">{e.nagad}</TableCell>
                
                    </TableRow>
                         <TableRow>
                <TableCell>Rocket</TableCell>
                      <TableCell align="right">{e.rocket}</TableCell>
                
              </TableRow>
                  </TableHead>
                  
                );
              })
              }
        
      </Table>
            </TableContainer>
            </>
  );
}
