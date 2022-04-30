import Layout from '../layout/Layout';
import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta
          name='description'
          content='Browse through latest events nearby. Join and book a ticket to your events'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
