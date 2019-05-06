import React from "react";
import CommentSection from '../CommentSection/CommentSection.js'

function PostContainer(props) {
    return (
        <div>
            {props.data.map(data => (
                <div key={data.imageUrl} className="posts">
                    <img src={data.thumbnailUrl} alt={data.username}/>
                    <h4>{data.username}</h4>
                    <img src={data.imageUrl} alt="from post"/>
                    <CommentSection comments={data.comments}/>
                </div>
            ))} 
        </div>
    )
}

export default PostContainer;