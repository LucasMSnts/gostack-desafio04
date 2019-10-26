import React, { Component } from 'react'; 

import Post from './Post';

class PostList extends Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Boa noite",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "Conteúdo do comentário"
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Asdrubal Correa",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe usar isso?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Charlote Fernandes",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "Joga no Google"
              }, {
                id: 2,
                author: {
                  name: "Cezar Fernandes",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "Acho que estou louco..."
              }
            ]
          }
        ]
      };

    render() {
        const { posts } = this.state;

        return (
            <div className="container">
              {posts.map(post => <Post key={post.id} data={post} />)}
            </div>
        );          
    }
}

export default PostList;