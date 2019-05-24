import React from "react";
import Post from './Post';


function PostContainer(props) {
    return (
        
        <Post data={props.data}/>
    )
}

export default PostContainer;