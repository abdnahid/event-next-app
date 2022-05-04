import EventList from '../components/EventList';
import Head from 'next/head';
import connect from '../database/lib/connect';
import Event from '../database/models/eventModel';

export default function Home({ featuredEvents }) {
  const featuredEventList = JSON.parse(featuredEvents);
  return (
    <>
      <Head>
        <title>Home | Popular events</title>
        <meta
          name='description'
          content='Latest and most Popular events nearby'
        />
      </Head>
      <div className='container'>
        <section className='all-events'>
          <EventList eventList={featuredEventList} />
        </section>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  connect();
  const getFeaturedEvents = await Event.find({ isActive: true });
  const featuredEvents = JSON.stringify(getFeaturedEvents);
  return {
    props: { featuredEvents },
    revalidate: 3600,
  };
};
