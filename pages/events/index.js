import React from 'react';
import { useRouter } from 'next/router';
import events from '../../dummyData';
import EventList from '../../components/EventList';
import SearchEvents from '../../components/SearchEvents';
import { getAllEvents } from '../../helpers/apiUtils';

const AllEvents = ({ allEvents }) => {
  const router = useRouter();
  const handleSearch = (month, year) => {
    router.push(`/events/${month}/${year}`);
  };
  return (
    <div className='container mx-auto'>
      <SearchEvents onSearch={handleSearch} />
      <section className='all-events'>
        <EventList eventList={allEvents} />
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const allEvents = await getAllEvents();
  return {
    props: { allEvents },
  };
};

export default AllEvents;
