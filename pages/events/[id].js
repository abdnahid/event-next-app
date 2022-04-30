import React, { useState } from 'react';
import Image from 'next/image';
import { getFeaturedEvents, getSingleEvent } from '../../helpers/apiUtils';
import Comment from '../../components/Comment';

const SingleEvent = ({ event }) => {
  console.log(event);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  console.log('hello');
  if (!event) {
    return <h4>Loading...</h4>;
  }
  const {
    _id,
    ticketPrice,
    picture,
    eventTitle,
    organizedBy,
    location,
    eventDate,
  } = event;
  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };
  const submitNewsletter = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/events/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await response.json();
    console.log(data);
  };
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
        <form onSubmit={submitNewsletter}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter your name'
            onChange={handleChange}
          />
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </section>
      <section className='add-comment'>
        <Comment />
      </section>
      <section className='all-comments'></section>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.id;
  const singleEvent = await getSingleEvent(eventId);
  if (!singleEvent) {
    return { notFound: true };
  }
  return {
    props: {
      event: singleEvent,
    },
    revalidate: 40,
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();
  const paramPaths = allEvents.map((event) => ({
    params: { id: event._id },
  }));
  return {
    paths: paramPaths,
    fallback: true,
  };
};

export default SingleEvent;
