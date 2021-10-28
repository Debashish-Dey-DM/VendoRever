import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 import { useHistory } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




export default function SignIn() {

  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem("user-info"))
    {
     setTimeout(() => { history.push('/user/Homepage'); }, 0);  
        }
     }, []);
  
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
   
  const submitData = async (e) => {
    e.preventDefault();
    const email = user.email.toString();
    const password = user.password.toString();
    const res = await axios.post(`http://localhost:8000/api/signin`, {  email: email, password: password });
    if (res.data.status === 200) {
      console.log(res.data.message);
     localStorage.setItem("user-info",JSON.stringify(res.data.user))
     setTimeout(() => { history.push('/user/Homepage'); }, 2000);  
    }
    else {
      console.log("neh tumse na ho payega");
    }
  
  }
  
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: [value] })
    console.log(name, value);
  }
    return (
        <div style={{
          height : "100",
        display: 'flex', justifyContent: 'center'
      }}>
        
    <Card sx={{ minWidth: 700 }}
    >
         <form onSubmit={submitData}>       
          <CardContent>
                    <div style={{
        display: 'flex', justifyContent: 'center'
      }}>
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder="Email"
        variant="filled"
        name="email"
        onChange={handleInput}
      />
             <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder="Password"
        variant="filled"
        name="password"
        onChange={handleInput}
      />
    </Stack>
    </div >
                
        <div  style={{
        display: 'flex', justifyContent: 'center'
        
      }}>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" type="submit" >
        Sign In
      </Button>
     <Link to={`Signup`} >
         <Button variant="contained"  >
        Sign Up
      </Button>
    </Link><br />
     
      
    </Stack>
              </div>
              </CardContent>
                </form>
            </Card>
            </div>
  );
}
