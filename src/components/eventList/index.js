// eventList
import React, { Component } from 'react';
import EventItem from '../eventItem';

export default class EventList extends Component {
    render() {
        let list = this.props.posts.map(
            (post, index) =>
                <EventItem key={index}
                    post={post}
                    deleteHandler={this.props.deleteHandler} />
        );
        return (
            <div className="col-md-12">
                <ol className="Events">
                    {list}
                </ol>
            </div>
        );
    }
}