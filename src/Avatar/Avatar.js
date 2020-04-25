import React from 'react';
import './Avatar.css';

export function Avatar(props){
    return(   <div className='Avatar'>
        <img src={props.url} width={props.width} shape={props.shape} alt=""  />
    </div>)
}