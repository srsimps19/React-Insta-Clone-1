import React from 'react';
import Comment from './Comment'

function CommentSection(props) {
    console.log("comment section: ", props)
    return (
        <>
            <Comment data={props.comments}/>
            <input 
                type="text"
                placeholder = "Add a comment..."
            />
        </>
    )
}

export default CommentSection;