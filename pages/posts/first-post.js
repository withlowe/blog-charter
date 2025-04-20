import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
