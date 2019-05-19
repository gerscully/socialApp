import eventModel from './eventModel';

const events = [{
    'title': 'Event 1',
    'description': 'First internal event',
    'type': 'internal',
    'evtstatus': 'upcoming',
  },
  {
    'title': 'Event 2',
    'description': 'First external event',
    'type': 'external',
    'evtstatus': 'upcoming',
  },
  {
    'title': 'Event 3',
    'description': 'Previous internal event',
    'type': 'internal',
    'evtstatus': 'past',
  },
  {
    'title': 'Event 4',
    'description': 'Previous external event',
    'type': 'external',
    'evtstatus': 'past',
  },
  {
    'title': 'Event 5',
    'description': 'Upcoming external event',
    'type': 'external',
    'evtstatus': 'upcoming',
  },

];

export default async function loadEvents() {
  try {
    await eventModel.deleteMany();
    await eventModel.collection.insertMany(events);
    console.info(`${events.length} events were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load Event Data: ${err}`);
  }
}