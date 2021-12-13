import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NewNavbar } from '../layouts/NewNavbar';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
export const Creategroup = () => {
  const history = useHistory();
      const [group, setGroup] = useState({
    Group_name: '',
    Group_description: ''

  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGroup({ ...group, [name]: [value] })
    console.log(name, value);
  }

    const submitData = async (e) => {
        e.preventDefault();
        const Group_name = group.Group_name.toString();
        const Group_description = group.Group_description.toString();
      const data = JSON.parse(localStorage.getItem("user-info"));
      if (data) {
        const id = data.id;
      
        const res = await axios.post(`http://localhost:8000/api/createGroup/${id}`, { Group_name: Group_name, Group_description: Group_description });
        console.log(res);
        history.push('/user/Friendlist');
        }
    }
    return (
        <>
            <NewNavbar />
            <Card sx={{ minWidth: 275 }}>
      <CardContent style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
       <form  onSubmit={submitData}> 
        <Stack spacing={2}>
         <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Group Name"
        variant="filled"
        size="small"
        name="Group_name"
        onChange={handleChange}
       
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Group Description"
        variant="filled"
        size="small"
        name="Group_description"
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Create Group
      </Button>
      
    </Stack>
    </form>

      </CardContent>
      
    </Card>
                

        </>
    )
}
