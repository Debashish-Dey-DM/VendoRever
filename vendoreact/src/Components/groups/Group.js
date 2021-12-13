import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewNavbar } from '../layouts/NewNavbar'
export const Group = () => {
    const { id: gid } = useParams()
    const [group, setgroup] = useState([]);
    const mount = async () => {
        const res = await axios.get(`http://localhost:8000/api/group/${gid}`);
        console.log(res.data);
        setgroup(res.data);
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
                        <h1>{e.Group_name}</h1>
                    )
            })
       }
        </div>
        
    )
}
