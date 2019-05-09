import React from "react";
import CommentSection from '../CommentSection/CommentSection.js';
import LikesButton from './LikesButton';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const PostDiv = styled.div`
    width: 642px;
    border-radius: 6px;
    border: 1px solid grey;
    margin-bottom: 10px;
    background-color: white;`;

export const PostHeader = styled.div`
    width: 640px;
    display: flex;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 5px 5px;
    }

    h4 {
        margin-top: 8px;
    }`;

export const BelowPicture = styled.div`
    text-align: start;
    margin-top: 5px;

    p {
        margin-left: 10px;
    }

    .fa-heart {
        padding-right: 10px;
        margin-left: 10px;
    }
        
    .timestamp {
        color: grey;
        margin-left: 10px;
    }`;

function Post(props) {
    return (
        <>
            {props.data.map(data => (
                <PostDiv key={data.imageUrl}>
                    <PostHeader>
                        <img src={data.thumbnailUrl} alt={data.username}/>
                        <h4>{data.username}</h4>
                    </PostHeader>
                    <img src={data.imageUrl} alt="from post"/>
                    <BelowPicture>
                        <LikesButton likesProps={data.likes}/>
                        <CommentSection comments={data.comments}/>
                        <p className="timestamp">{moment().startOf('day').fromNow()}</p>
                    </BelowPicture>
                </PostDiv>
            ))} 
        </>
    )
}


Post.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,

    })).isRequired
}
export default Post;