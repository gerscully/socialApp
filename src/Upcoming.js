import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import socialBanner from './header.jpg';
import EventList from './components/eventList';
import EventForm from './components/eventForm';
import * as api from './api';
import _ from 'lodash';
import './Upcoming.css';

class Upcoming extends Component {
    state = { posts: [{}] };

    async componentDidMount() {
        const resp = await api.getAll();
        this.setState({
            posts: resp
        });
    };

    addEventItem = async (title, description, type, evtstatus) => {
        await api.add(title, description, type, evtstatus)
            .then(resp => {
                const newPost = { "id": resp.id, "title": title, "description": description, "type": type, "evtstatus": evtstatus };
                this.setState({ posts: this.state.posts.concat([newPost]) });
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
        let filteredPosts = _.filter(posts, (e) => (e.evtstatus === 'Upcoming' || e.evtstatus === 'upcoming'))

        return (
            <div>
                <header className="App-header">
                    <img src={socialBanner} alt="logo" />
                    <h1>Upcoming Events</h1>
                </header>
                <div>
                    <div class="btn-toolbar">
                        <a href="http://localhost:3000/" class="btn btn-success btn-lg" role="button" Link Button> Home</a>
                        <a href="http://localhost:3000/past" class="btn btn-success btn-lg" role="button" Link Button> Past Events</a>
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
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-md-offset-1">
                                <EventForm addHandler={this.addEventItem} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Upcoming);