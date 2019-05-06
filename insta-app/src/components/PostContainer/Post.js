import React from "react";
import CommentSection from '../CommentSection/CommentSection.js';
import moment from 'moment';
import PropTypes from 'prop-types';

function Post(props) {
    return (
        <div>
            {props.data.map(data => (
                <div key={data.imageUrl} className="posts">
                    <img src={data.thumbnailUrl} alt={data.username}/>
                    <h4>{data.username}</h4>
                    <img src={data.imageUrl} alt="from post"/>
                    <CommentSection comments={data.comments}/>
                    {moment().startOf(data.timestamp).fromNow()}
                </div>
            ))} 
        </div>
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