import React from 'react'; 

function Comment( { data } ) {
    return (
        <div className="comment">
            <img src={data.author.avatar} alt={data.author.name} />
            <p>
                <span>{data.author.name}</span>
                {data.content}
            </p>
        </div>
    )          
}

export default Comment;