import React from 'react';
import Comment from './Comment';
import './CommentSection.scss';

function CommentSection(props) {
    return (
        <div className="commentSection">
            <Comment data={props.comments}/>
            <input 
                type="text"
                placeholder="Add a comment..."
            />
        </div>
    )
}

export default CommentSection;