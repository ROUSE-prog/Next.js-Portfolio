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
        <p>Welcome to my full-stack portfolio! My name is Steven Rouse A full-stack developer with a passion for building dynamic and functional web apps
         here you will see a selection of projects plus other sites that showcase my skills and experience in both front-end and back-end development
        ,With close to 5 years of (HTML,CSS,JavaScript,and Python), as well as frameworks and libraries such as React, Next.js, Three.js, Node.js,and Django. 
        I am skilled in designing and implementing responsive and user-friendly interfaces, as well as building robust and scalable back-end systems.</p>

        <p>A full-stack developer with a passion for building dynamic and functional web apps
         here you will see a selection of projects plus other sites that showcase my skills and experience in both front-end and back-end development
        ,With close to 5 years of (HTML,CSS,JavaScript,and Python), as well as frameworks and libraries such as React, Next.js, Three.js, Node.js,and Django. 
        I am skilled in designing and implementing responsive and user-friendly interfaces, as well as building robust and scalable back-end systems.</p>

        <h2>Projects</h2>
        <p>
          Three.js Portfolio:
          I also have my portfolio available running in with Three.js here. I wanted to work with 3D elements.
          Although a bit simple in design. It showcase my ability to work on new technologies in a great-pace.
          Completion time: 2 days. 
        </p>

        
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
