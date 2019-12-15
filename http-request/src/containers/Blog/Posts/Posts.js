import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link, Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        console.log(this.props);
        axios
            .get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    };
                });
                this.setState({ posts: updatePosts });
            })
            .catch(error => {
                // this.setState({ error: true });
                console.log(error);
            });

        // get request need some time to wait until the request finish
        // Basicly, JS did not wait the procces so we then to use .then() method
        // to fetch the data
    }
    postSelectedHandler = id => {
        this.setState({ selectedPostId: id });
    };

    render() {
        let posts;
        !this.state.error
            ? (posts = this.state.posts.map(post => {
                  return (
                      <Link to={'/' + post.id} key={post.id}>
                          <Post
                              title={post.title}
                              author={post.author}
                              clicked={() => this.postSelectedHandler(post.id)}
                          />
                      </Link>
                  );
              }))
            : (posts = (
                  <p style={{ textAlign: 'center' }}>Something went wrong!</p>
              ));

        return (
            <div>
                <section className='Posts'>{posts}</section>
                <Route path='/:id' component={FullPost} />
            </div>
        );
    }
}

export default Posts;
