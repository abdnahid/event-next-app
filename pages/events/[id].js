import React from 'react';
import Image from 'next/image';
import Comment from '../../components/Comment';
import Newsletter from '../../components/Newsletter';
import connect from '../../database/lib/connect';
import Event from '../../database/models/eventModel';

const SingleEvent = ({ singleEvent }) => {
  const singleEventItem = JSON.parse(singleEvent);
  if (!singleEventItem) {
    return <h4>Loading...</h4>;
  }
  const { ticketPrice, picture, eventTitle, organizedBy, location, eventDate } =
    singleEventItem;
  return (
    <div className='container mx-auto'>
      <section className='event-details grid grid-cols-2'>
        <div className='featured-image'>
          <Image src={picture} alt={eventTitle} width={750} height={500} />
        </div>
        <div className='content'>
          <h2>{eventTitle}</h2>
          <p>
            <strong>Time: </strong>
            {eventDate}
          </p>
          <h2>
            <strong>Location:</strong>
            {location}
          </h2>
          <p>
            <strong>Ticket Price:</strong>
            {ticketPrice}
          </p>
          <h3>
            <strong>Organized By:</strong> {organizedBy}
          </h3>
        </div>
      </section>
      <section className='newsletter'>
        <Newsletter />
      </section>
      <section className='add-comment'>
        <Comment />
      </section>
      <section className='all-comments'></section>
    </div>
  );
};

export const getStaticProps = async (context) => {
  connect();
  const eventId = context.params.id;
  const getSingleEvent = await Event.findOne({ _id: eventId });
  const singleEvent = JSON.stringify(getSingleEvent);
  if (!singleEvent) {
    return { notFound: true };
  }
  return {
    props: { singleEvent },
    revalidate: 40,
  };
};

export const getStaticPaths = async () => {
  connect();
  const allEvents = await Event.find({});
  const paramPaths = allEvents.map((event) => ({
    params: { id: event._id.toString() },
  }));
  console.log(paramPaths);
  return {
    paths: paramPaths,
    fallback: true,
  };
};

export default SingleEvent;
