import EventList from '../components/EventList';
import { getFeaturedEvents } from '../helpers/apiUtils';
import Head from 'next/head';

export default function Home({ featuredEvents }) {
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
          <EventList eventList={featuredEvents} />
        </section>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { featuredEvents },
    revalidate: 3600,
  };
};
