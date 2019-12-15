import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import asyncComponet from '../../Hoc/asyncComponent';

const asyncNewpost = asyncComponet(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: false
    };

    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/' exact>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?quick-submit=true'
                                    }}
                                >
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/' component={Posts} />
                    {this.state.auth ? (
                        <Route path='/new-post' component={asyncNewpost} />
                    ) : null}
                </Switch>
            </div>
        );
    }
}

export default Blog;
