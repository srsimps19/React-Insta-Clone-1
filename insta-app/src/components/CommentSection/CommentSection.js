import React from 'react';
import Comment from './Comment'

function CommentSection(props) {
    return (
        <Comment data={props.comments}/>
    )
}

export default CommentSection;