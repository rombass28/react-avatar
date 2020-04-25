import React from 'react';
import "./Comment.css";

export function Comment(props) {
    return(<div className="Comment">
        <div className='author'>{props.author}</div>
        <div className='date'>{props.date}</div>
        <div className='content'>{props.content}</div>
    </div>)
}