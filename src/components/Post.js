import React from 'react';

import Comment from './Comment';

function Post ({ data }){   
    return (
        <div>
            <div>{data.author.name}</div>
            <div>{data.date}</div>
            <div>{data.content}</div>
            <div>
                {data.comments.map(comment => 
                    <Comment key={comment.id} data={comment} />
                )}
            </div>
        </div>
    )
}

export default Post;