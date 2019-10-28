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
            content: "lorem ipsum dolor sit amet consectetur adipiscing elit nec gravida hendrerit hac pharetra porttitor litora aenean neque leo sociosqu ultricies tortor habitant " + 
                      "id rutrum justo vehicula luctus aptent est ante fermentum dictum dis pellentesque urna fringilla feugiat congue dui etiam suscipit nam malesuada netus libero " +
                      "eu metus mauris maximus ut nisi arcu sodales semper molestie dignissim ridiculus curabitur ",
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
            <div className="posts">       
              <div>     
                {posts.map(post => <Post key={post.id} data={post} />)}  
              </div>
            </div>          
          </div>
        );          
    }
}

export default PostList;