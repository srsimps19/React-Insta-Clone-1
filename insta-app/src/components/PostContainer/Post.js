import React from "react";
import CommentSection from '../CommentSection/CommentSection.js';
import moment from 'moment';
import PropTypes from 'prop-types';
import './PostContainer.scss'

function Post(props) {
    return (
        <>
            {props.data.map(data => (
                <div key={data.imageUrl} className="post">
                    <div className="postHeader">
                        <img src={data.thumbnailUrl} alt={data.username}/>
                        <h4>{data.username}</h4>
                    </div>
                    <img src={data.imageUrl} alt="from post"/>
                    <div className="belowPicture">
                        <i className="far fa-heart fa-2x"></i>
                        <i className="far fa-comment fa-2x"></i>
                        <h4>{data.likes} likes</h4>
                        <CommentSection comments={data.comments}/>
                        <p className="timestamp">{moment().startOf('day').fromNow()}</p>
                    </div>
                </div>
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