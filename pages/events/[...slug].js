import React from 'react';
import EventList from '../../components/EventList';
import { getFilteredEvents } from '../../helpers/apiUtils';

const SearchResult = ({ filteredEvents }) => {
  if (!filteredEvents || filteredEvents.length === 0) {
    return <h4 style={{ textAlign: 'center' }}>No events found</h4>;
  }
  return (
    <div className='container mx-auto'>
      <section className='all-events'>
        <EventList eventList={filteredEvents} />
      </section>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const [month, year] = context.params.slug;
  console.log(context.params);
  const filteredEvents = await getFilteredEvents(month, year);
  return {
    props: { filteredEvents },
  };
};

export default SearchResult;
