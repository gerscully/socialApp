import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import socialBanner from './header.jpg';
import EventList from './components/eventList';
import EventForm from './components/eventForm';
import api from './dataStore/stubAPI';
import _ from 'lodash';
import './Upcoming.css';

class Upcoming extends Component {
    addEventItem = (title, description, type, evtstatus) => {
        api.add(title, description, type, evtstatus)
        this.setState({})
    };
    deleteEventList = (key) => {
        api.delete(key)
        this.setState({})
    };
    render() {
        let posts = _.sortBy(api.getAll(),
            (post) => post.id
        );
        // let filteredPosts = _.filter(this.props.posts, (e) => (e.evtstatus.toLowerCase() === 'upcoming'))
        let filteredPosts = _.filter(posts, (e) => (e.evtstatus.toLowerCase() === 'upcoming'))

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