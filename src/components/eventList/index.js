// eventList
import React, { Component } from 'react';
import EventItem from '../eventItem';

export default class EventList extends Component {
    render() {
        const list = this.props.posts.map(
            (p) => {return <EventItem key={p._id}  
                    post={p}
                    deleteHandler={this.props.deleteHandler} />
            });
        return (
            <div className="col-md-12">
                <ol className="Events">
                    {list}
                </ol>
            </div>
        );
    }
}
