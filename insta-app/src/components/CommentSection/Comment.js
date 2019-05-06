import React from 'react';
import PropTypes from 'prop-types';

function Comment(props){
    console.log("comment: ", props)
    return(
        <div>
            {props.data.map(data => 
                <><h4>{data.username}</h4><p>{data.text}</p></>)}

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