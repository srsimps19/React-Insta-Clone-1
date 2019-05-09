import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const CommentsDiv = styled.div`
    width: 640px;`;

export const CommentDiv = styled.div`
    display: flex;

    h4 {
        margin: 5px 5px 5px 10px;
        padding-top: 3px;
        font-size: 1.25rem;
    }

    p {
        margin-top: 8px;
    }`;

function Comment(props){
    return(
        <CommentsDiv>
            {props.data.map((data,i) => 
                <CommentDiv key={i}><h4>{data.username}</h4><p>{data.text}</p></CommentDiv>)}

        </CommentsDiv>
    )
}

Comment.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
}
export default Comment;