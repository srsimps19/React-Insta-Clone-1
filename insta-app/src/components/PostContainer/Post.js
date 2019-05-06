import React from "react";
import CommentSection from '../CommentSection/CommentSection.js';
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
                    <p>{data.timestamp}</p>
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
        timestamp: PropTypes.string.isRequired

    })).isRequired
}
export default Post;