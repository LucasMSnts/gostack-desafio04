import React from 'react';

import Comment from './Comment';

function Post ({ data }){   
    return (
        <div className="post">
            <div className="author">
                <img src={data.author.avatar} alt={data.author.name} />
                <div>
                    <p>{data.author.name}</p>
                    <span>{data.date}</span>
                </div>
            </div>
            <div className="content">{data.content}</div>            
            <div className="postcomments">
                <div className="divider" />
                {data.comments.map(comment => 
                    <Comment key={comment.id} data={comment} />
                )}
            </div>
        </div>
    )
}

export default Post;