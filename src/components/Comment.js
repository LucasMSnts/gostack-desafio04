import React from 'react'; 

function Comment( { data } ) {
    return (
        <div>
            <div>{data.author.name}</div>
            <div>{data.content}</div>
        </div>
    )          
}

export default Comment;