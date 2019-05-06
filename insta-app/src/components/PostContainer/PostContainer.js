import React from "react";
import Post from './Post';
import './PostContainer.scss'

function PostContainer(props) {
    return (
        <Post data={props.data}/>
    )
}

export default PostContainer;