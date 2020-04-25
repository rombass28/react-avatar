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
            author="Paul Scheuring"
            date="Published on: 29/08/2005"
            content="He wrote the television series Prison Break"
       />

        <Comment
            author="Carter Bays, Craig Thomas"
            date="Published on: 19/09/2005"
            content="They wrote the sitcom How I Met Your Mother"
       />
    </div>)
}