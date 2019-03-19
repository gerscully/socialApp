import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import EventForm from '../src/components/eventForm';
import EventItem from '../src/components/eventItem';
import EventList from '../src/components/eventList';

const post = {
    id: 1,
    title: 'Summer BBQ',
    description: ['Jack Meades, Fri Jun 23rd at 8pm'],
    type: 'External'
};

storiesOf('Social App/Event Item', module)
    .add('default', () => <EventItem post={post} />
    )


storiesOf('Social App/Event Form', module)
    .add('default', () => <EventForm />
    )

storiesOf('Social App/Event List', module)
    .add('default', () => {
        const defaultPosts = [
            { ...post, id: 1, title: 'Event 1', description: 'Piss-up in a Brewery', type: 'External' },
            { ...post, id: 2, title: 'Event 2', description: 'Yet Another Pizza Quiz', type: 'Internal' },
            { ...post, id: 3, title: 'Event 3', description: 'Gone To The Dogs', type: 'External' },
            { ...post, id: 4, title: 'Event 4', description: 'Bingo Again', type: 'Internal' }
        ];
        return <EventList posts={defaultPosts} />
    });    