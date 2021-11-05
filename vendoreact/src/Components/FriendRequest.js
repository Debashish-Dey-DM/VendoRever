import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OnlyList from './OnlyList';
import Navbar from './layouts/Navbar';

export const FriendRequest = () => {
     const [current, setcurrent] = useState("");
  const [user, setuser] = useState([]);
  const mount = async () => {
         const data = JSON.parse(localStorage.getItem("user-info"));
         if (data) {
           console.log(data.name);
           setcurrent(data.name);
           const id = data.id;

        const res = await axios.get(`http://localhost:8000/api/friendRequest/${id}`);
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
Friend Requests      </Typography>
        <Typography variant="body2" color="text.secondary">
          Here Is the List of All users That You have sent friend Request . Now you can choose your vendor mates, make a group with them
          and you can sell products together to a shop
        </Typography>
                        {/*list*/}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        user.map((e) => {
          return (
            <>
              <ListItem alignItems="flex-start">
        <ListItemAvatar>
                  <Avatar alt={e.name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={e.name }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               
              </Typography>
              {e.email}

              
              <div>
                <Button> <ClearIcon /> </Button> 
                
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


                        {/* end*/}                 
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
