import React from 'react';
import EventItem from './EventItem';
import events from '../dummyData';

const EventList = ({ eventList }) => {
  return (
    <div className='grid grid-responsive-cols-3 gap-2'>
      {eventList.map((event) => (
        <EventItem key={event._id} eventInfo={event} />
      ))}
    </div>
  );
};

export default EventList;
