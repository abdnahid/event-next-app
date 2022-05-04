import React from 'react';
import { useRouter } from 'next/router';
import EventList from '../../components/EventList';
import SearchEvents from '../../components/SearchEvents';
import Event from '../../database/models/eventModel';
import connect from '../../database/lib/connect';

const AllEvents = ({ allEvents }) => {
  const allEventsList = JSON.parse(allEvents);
  const router = useRouter();
  const handleSearch = (month, year) => {
    router.push(`/events/${month}/${year}`);
  };
  return (
    <div className='container mx-auto'>
      <SearchEvents onSearch={handleSearch} />
      <section className='all-events'>
        <EventList eventList={allEventsList} />
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  connect();
  const getAllEvents = await Event.find({});
  const allEvents = JSON.stringify(getAllEvents);
  return {
    props: { allEvents },
    revalidate: 3600,
  };
};

export default AllEvents;
