import React from 'react';

function Comment(props){
    console.log("comment: ", props)
    return(
        <div>
            {props.data.map(data => 
                <><h4>{data.username}</h4><p>{data.text}</p></>)}
        </div>
    )
}

export default Comment;