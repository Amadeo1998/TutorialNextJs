import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Link from 'next/link';


export default function Home({allPostsData}) {
  return (
    <>
    
    <Head>
      <title>Create Next App </title>
      <meta property="og:title" content="My page title" key="title" />

    </Head>
    <Layout home>
    {/* Keep the existing code here */}

    {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
            ))}
        </ul>
        </section>
        <h2>Dit is een test</h2>
    </Layout>
    </>
  );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }