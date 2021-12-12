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
import { Button } from '@mui/material';
import { useHistory } from 'react-router';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}




export default function UserDetails() {
  const history = useHistory();
  const [id,setId] = useState('');
  const [email, setemail] = useState("");
  const [password,setPassword] = useState("");
  const [phone, setphone] = useState("");
  const [bkash, setbkash] = useState("");
  const [nagad, setnagad] = useState("");
  const [rocket, setrocket] = useState("");
  const [name, setname] = useState("");
  const [form, setform] = useState("show");
  const [iuser, setIuser] = useState({
    bkash: '',
    nagad: '',
    rocket: '',
  });
 


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIuser({ ...iuser, [name]: [value] });
    console.log(name,value);
    
  }

  const submitData = async (e) => {
    e.preventDefault();
    const nbkash = iuser.bkash.toString();
    const nnagad = iuser.nagad.toString();
    const nrocket = iuser.rocket.toString();
    const uid = id.toString();
    
    
    const res = await axios.post(`http://localhost:8000/api/user/UserList/${uid}`, { bkash: nbkash, nagad: nnagad, rocket: nrocket });
    if(res.data.status === 200){
      
      alert("Data Updated Please Login Again");
        localStorage.clear();
     history.push('/signin')
    }
    else{
      alert("Error");
    }
  }



  const [user, setuser] = useState([]);
      const mount = async () => {
       
        const data = JSON.parse(localStorage.getItem("user-info"));
       
        console.log(data)
        
        if (data) {
        setemail(data.email)
        setname(data.name)
        setphone(data.phone)
        setbkash(data.bkash)
        setnagad(data.nagad)
        setrocket(data.rocket)
          setId(data.id)
          setPassword(data.password)

        }
        if(data.bkash&&data.nagad&&data.rocket){
          setform("hide")
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
      <form onSubmit={submitData}>
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
                      <TableCell align="right">{bkash ? bkash : <><input type="text" name ="bkash" onChange={handleInput} /> </>}</TableCell>
                
                    </TableRow>
                         <TableRow>
                <TableCell>Nagad</TableCell>
                      <TableCell align="right">{nagad ? nagad : <><input type="text" name ="nagad" onChange={handleInput} /> </>}</TableCell>
                
                    </TableRow>
                    <TableRow>
                <TableCell>Rocket</TableCell>
                      <TableCell align="right">{rocket ? rocket : <><input type="text" name ="rocket" onChange={handleInput} /> </>}</TableCell>
                
                </TableRow>
                {
                  form==="show" ? 
                  <>
                     <TableRow>
                <TableCell>-</TableCell>
                        <TableCell align="right">
                          <Button variant="contained" type="submit">Submit</Button>
                          
                        </TableCell>
                
              </TableRow>
                    </>
                    :
                    <>
                      
                    </>
                    
                }
                  </TableHead>
                  
             
        
          </Table>
          
          </TableContainer>
          </form>
            
            </>
  );
}
