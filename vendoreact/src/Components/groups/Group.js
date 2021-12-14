import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewNavbar } from '../layouts/NewNavbar'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const Group = () => {
    const { id: gid } = useParams()
    const [group, setgroup] = useState([]);
    const [member, setmember] = useState([]);
    const [user, setuser] = useState([]);
    const [isadmin, setisadmin] = useState("");

    const mount = async () => {
        const res = await axios.get(`http://localhost:8000/api/group/${gid}`);
        
        setgroup(res.data);

        const data = JSON.parse(localStorage.getItem('user-info'));
        if (data) {
            console.log(data.id);
            const id = data.id;
            setisadmin(data.id);
           const res2 = await axios.get(`http://localhost:8000/api/friendList/${id}`);
            console.log(res.data);
            if(res2.status ===200){
                setuser(res2.data);
            }
        }
        const res3 = await axios.get(`http://localhost:8000/api/group/members/${gid}`);
        if(res3.status ===200){
         console.log(res3.data);
            setmember(res3.data);
        }

    }
    useEffect(() => {
        mount();
    }, [])
    return (
        <div>
            <NewNavbar />
            
        {
                group.map((e) => {
                    return (
                        <> 
                            <div style={{
                            display: 'flex', justifyContent: 'center'
                            }}>
                            
                            <Card style={{ width: '50%', marginTop: '10px' }} sx={{ maxWidth: 700 }}>
                                <h1>{e.Group_name}</h1>
                                <p>{e.Group_description}</p>
                                </Card>
                                </div>
                        
                        </>
                    )
            })
            }
            <h1 style={{
             display: 'flex', justifyContent: 'center'
            }}>Will create a chatbox</h1>
            <div style={{
        display: 'flex', justifyContent: 'center'
      }}>
            <Card sx={{ maxWidth: 700}}>
                    <div style={{
                            display: 'flex', justifyContent: 'center'
                    }}>
                        <h2 >Members</h2>
                        </div>              
                    {
                member.map((e) => {
                    return (
                        <> 
                            <div style={{
                            display: 'flex', justifyContent: 'center'
                            }}>
                                
                                <h5>{e.name}</h5>
                                </div>
                        
                        </>
                    )
            })
            } 
            </Card>
             <Card style={{ width: '30%', marginTop: '10px' }} sx={{ maxWidth: 700}}>
                   <div style={{
                            display: 'flex', justifyContent: 'center'
                    }}>
                        <h2 >Friends</h2>
                    </div>

                    {
                user.map((e) => {
                    return (
                        <> 
                            
                     {/* <Stack direction="row" spacing={2}>
                                    <h5>{e.name}</h5> 
                                  
                    </Stack> */}
                    <Box sx={{ flexGrow: 1 }}>
                     <Grid container spacing={2}>
                         <Grid item xs={8}>
                    <Item>{e.name}</Item>
                                    </Grid>
                                    <Grid item xs={4}>
                        <Item><Button> <AddCircleOutlineOutlinedIcon/></Button> </Item>
                         </Grid>
                     </Grid>
                    </Box>
                                
                        
                        </>
                    )
            })
            }
             </Card>
</div>
        </div>
        
    )
}
