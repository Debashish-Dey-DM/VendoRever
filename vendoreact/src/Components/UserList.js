import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OnlyList from './OnlyList';
import Navbar from './layouts/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
export default function UserList() {
      const [current, setcurrent] = useState("");
  const [user, setuser] = useState([]);
  const mount = async () => {
         const data = JSON.parse(localStorage.getItem("user-info"));
         if (data) {
           console.log(data.name);
           setcurrent(data.name);
           const id = data.id;

        const res = await axios.get(`http://localhost:8000/api/UserList/${id}`);
        console.log(res.data);

        if (res.status === 200) {
            setuser(res.data)
            
        }

           
        }

  }

useEffect(() => {
    mount();
        
    }, []);
  
  return (
        <div>
            <Navbar/>
      <div style={{
        display: 'flex', justifyContent: 'center'
      }}>
    <Card sx={{ maxWidth: 700}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          All Users
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Here Is the List of All users. You can find your vendor mate, make a group with them
          and can sell products together to a shop
            </Typography>
            
            {/* <OnlyList/> */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        user.map((e) => {
          return (
            <>
              <ListItem alignItems="flex-start">
        <ListItemAvatar>
                  <Avatar alt={!(current === e.name)?e.email: <> <del>{e.name}</del> </> } src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={!(current === e.name)?e.name: <> <del>{e.name}</del> </> }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               
              </Typography>
              {!(current === e.name) ? e.email : <> <del>{e.email}</del> </>}

              {
                !(current === e.name) ?
                  
              <Stack direction="row" spacing={4}>
                    <ClearIcon />
                    <Button onClick={
                     async () => {
                       const data = JSON.parse(localStorage.getItem("user-info"));
                       if (data) { 
                         const id = data.id;
                         const uid = e.id;
                         const res = await axios.post(`http://localhost:8000/api/sent/${id}/${uid}`);
                          if (res.status === 200) {
                            alert("Request Sent");
                            mount();
                         }
                         else {
                           alert("Error");
                         }
                       }
                      }
                    }>
                      <DoneIcon />
                      </Button>
                    
                    
                  </Stack>
                  :
                  <h5>Damm its you man</h5>
                }
              <div>
                
                
              </div>
            </React.Fragment>
          }
        />
              </ListItem>
              
      <Divider variant="inset" component="li" />
            </>
          );
        })
      }
      
    </List>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
            </Card>
            </div>
            </div>
  );
}
