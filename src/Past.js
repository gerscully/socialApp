import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import socialBanner from './header.jpg';
import EventList from './components/eventList';
import * as api from './api';
import _ from 'lodash';
import './Past.css';

class Past extends Component {

    state = { posts: [{}] };

    async componentDidMount() {
        const resp = await api.getAll();
        this.setState({
            posts: resp
        });
    };

    deleteEventList = async (key) => {
        try {
            const resp = await api.del(key);
            this.setState({
                posts: resp
            });
        } catch (e) { alert(`Couldn't delete event: ${e}`) }
    };
    render() {
        let posts = _.sortBy(this.state.posts,
            (post) => post._id
        );
        let filteredPosts = _.filter(posts, (e) => (e.evtstatus === 'Past' || e.evtstatus === 'past'))
        return (
            <div>
                <header className="App-header">
                    <img src={socialBanner} alt="logo" />
                    <h1>Past Events</h1>
                </header>
                <div class="btn-toolbar">
                    <a href="http://localhost:3000/" class="btn btn-success btn-lg" role="button" Link Button> Home</a>
                    <a href="http://localhost:3000/upcoming" class="btn btn-success btn-lg" role="button" Link Button> Upcoming Events</a>
                </div>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-md-offset-1">
                                <EventList posts={filteredPosts}
                                    deleteHandler={this.deleteEventList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Past);