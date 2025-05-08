// pages/index.js
import Head from 'next/head';
import Layout from '@/components/Layout'; // or '../components/Layout' if not using aliases

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my website" />
      </Head>
      
      <main>
        <h1>Welcome to My Next.js Site!</h1>
        <p>This is the homepage content.</p>
      </main>
    </Layout>
  );
}