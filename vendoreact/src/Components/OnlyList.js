import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Stack from '@mui/material/Stack';
export default function OnlyList() {
  const [current, setcurrent] = useState("");
  const [user, setuser] = useState([]);
  const mount = async () => {
         const data = JSON.parse(localStorage.getItem("user-info"));
         if (data) {
           console.log(data.name);
           setcurrent(data.name);
           const id = data.id;

        const res = await axios.get(`http://localhost:8000/api/user/UserList`);
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
                 <DoneIcon/>
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
      
      
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem> */}
    </List>
  );
}
