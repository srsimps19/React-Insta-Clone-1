import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.scss';

function Comment(props){
    return(
        <div className="comments">
            {props.data.map(data => 
                <div className='comment'><h4>{data.username}</h4><p>{data.text}</p></div>)}

        </div>
    )
}

Comment.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
}
export default Comment;