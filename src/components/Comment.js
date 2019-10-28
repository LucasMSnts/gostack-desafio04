import React from 'react'; 

function Comment( { data } ) {
    return (
        <div className="comment">
            <span>{data.author.name}</span>
            <p>{data.content}</p>
        </div>
    )          
}

export default Comment;