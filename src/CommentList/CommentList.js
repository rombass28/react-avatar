import React from 'react';
import { Comment } from '../Comment/Comment'

export function CommentList(props) {
    return (<div className="CommentList">
        <Comment
            author="J. K. Rowling"
            date="Published on: 27/06/1997"
            content="He wrote the book Harry Potter"
       />

        <Comment
            author="Rafael Nadal"
            date={new Date(3,6,1986).toString()}
            content="He is the best tennis player"
       />

        <Comment
            author="Michael Jordan"
            date={new Date(17,2,1963).toString()}
            content="He is the best basketball player"
       />
    </div>)
}