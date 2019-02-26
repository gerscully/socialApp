import React, { Component } from 'react';
import NewsList from './components/newsList';
import Form from './components/newsForm';
import api from './dataStore/stubAPI';
import _ from 'lodash';

export default class App extends Component {
    addNewsItem = (title, link) => {
        api.add(title, link)
        this.setState({})
    }
    incrementUpvote = (id) => {
        api.upvote(id);
        this.setState({});
    };
    render() {
        let posts = _.sortBy(api.getAll(),
            (post) => - post.upvotes
        );
        return (
            <div className="jumbotron">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-md-offset-3" >
                            <a href="/"><h1>Hacker News</h1></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-md-offset-1">
                            <NewsList posts={posts}
                                upvoteHandler={this.incrementUpvote} />
                            <Form handleAdd={ this.addNewsItem } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}