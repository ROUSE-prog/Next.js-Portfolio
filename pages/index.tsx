import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../Lib/post';
import Link from 'next/link';
import Date from '../components/date';
import p5 from 'p5';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}  

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
      <link rel="Me" href="public/linkinphoto.jpg"/>
        <p>Welcome to my full-stack portfolio! My name is Steven Rouse and I am a full-stack developer with a passion for building dynamic and functional web apps. In this portfolio, you will find a selection of projects that showcase my skills and experience in both front-end and back-end developmen
As a full-stack dev, I have a strong foundation in the programming languages (HTML,CSS,JavaScript,and Python), as well as frameworks and libraries such as React, Next.js,Three.js, Node.js, and Django. I am skilled in designing and implementing responsive and user-friendly interfaces, as well as building robust and scalable back-end systems.
Throughout my consistant learning, I have worked on a wide range of projects, from small personal projects to large-scale enterprise applications. I am always seeking new challenges and opportunities to learn and grow as a developer.
Thank you for visiting my portfolio. I hope you enjoy exploring my work and learning more about my capabilities as a full-stack developer.</p>
      </section>
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
    </Layout>
  );
 }
