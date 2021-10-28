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
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [bkash, setbkash] = useState("");
  const [nagad, setnagad] = useState("");
  const [rocket, setrocket] = useState("");
  const [name, setname] = useState("");
  







  const [user, setuser] = useState([]);
      const mount = async () => {
        const res = await axios.get('http://localhost:8000/api/user/Homepage');
        console.log(res.data);
        const data = JSON.parse(localStorage.getItem("user-info"));
        console.log(data)
        if (data) {
        setemail(data.email)
        setname(data.name)
        setphone(data.phone)
        setbkash(data.bkash)
        setnagad(data.nagad)
        setrocket(data.rocket)
        }
        
        
        
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
           
                  
                  <TableHead >
              <TableRow>
                <TableCell>Name</TableCell>
                      <TableCell align="right">{name ? name : "edit"}</TableCell>
            
                    </TableRow>
                    <TableRow>
                <TableCell>Phone</TableCell>
                      <TableCell align="right">{phone}</TableCell>
                
                    </TableRow>
                    
                     <TableRow>
                <TableCell>email</TableCell>
                      <TableCell align="right">{email}</TableCell>
                
                    </TableRow>
                     <TableRow>
                <TableCell>bkash</TableCell>
                      <TableCell align="right">{bkash}</TableCell>
                
                    </TableRow>
                         <TableRow>
                <TableCell>Nagad</TableCell>
                      <TableCell align="right">{nagad}</TableCell>
                
                    </TableRow>
                         <TableRow>
                <TableCell>Rocket</TableCell>
                      <TableCell align="right">{rocket}</TableCell>
                
              </TableRow>
                  </TableHead>
                  
             
        
      </Table>
            </TableContainer>
            </>
  );
}
