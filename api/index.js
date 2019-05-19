import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import eventsRouter from '../api/events';
import './db'
import loadEvents from '../api/events/eventData';

dotenv.config();

const app = express();

const port = process.env.PORT;

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/events', eventsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

if (process.env.seedDb) {
  loadEvents();
};