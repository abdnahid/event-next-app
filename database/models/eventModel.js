import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  ticketPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  picture: {
    type: String,
  },
  eventTitle: {
    type: String,
    required: true,
  },
  organizedBy: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
  },
  contactPhone: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  eventDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  tags: {
    type: Array,
  },
});

/* const Event = mongoose.model('Event', EventSchema); */

const Event = mongoose.models['Event']
  ? mongoose.model('Event')
  : mongoose.model('Event', EventSchema);

export default Event;
