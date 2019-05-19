import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, optional: true },
    type: { type: String, required: true },
    evtstatus: { type: String, required: true, enum: ['upcoming', 'past', 'Upcoming', 'Past'] },
});

export default mongoose.model('events', EventSchema);