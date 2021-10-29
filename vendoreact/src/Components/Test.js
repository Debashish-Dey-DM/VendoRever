import React from 'react'

export const Test = () => {
   
    let show = localStorage.getItem('user-info');
     show = JSON.parse(show);
    return (
        <div>
            <h1>Hello</h1>
            <h2>{show.id}</h2>
        </div>
    )
}
