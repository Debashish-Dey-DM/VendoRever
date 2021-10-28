import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
 

export const Protected = (props) => {
    const Cmp = props.Cmp
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem("user-info"))
            {
                history.push('/signin')
            }
    },[])
    return (
        <div>
            <Cmp/>
        </div>
    )
}
