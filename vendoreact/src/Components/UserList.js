import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OnlyList from './OnlyList';
import Navbar from './layouts/Navbar';
export default function UserList() {
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
        <OnlyList/>
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
