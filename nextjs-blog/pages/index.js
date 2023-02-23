import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date';

export default function Home( { allPostsData } ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{textAlign:"justify"}}>
          My name is Andrzej and I am a passionate Frontend developer. I have recently graduated from  University with a degree in doctoral, where I gained knowledge in HTML, CSS, JavaScript, and other relevant technologies.
        </p>
        
        <p style={{textAlign:"justify"}}>
          My experience includes creating responsive designs, developing user-friendly interfaces, and implementing various features and functionalities. I   also have experience with version control systems such as Git and working with Agile methodologies.
        </p>
        
        <p style={{textAlign:"justify"}}>
        In my free time, I like to explore new technologies and experiment with new design patterns. I believe that staying up-to-date with the latest trends and technologies is crucial in this industry.
        

        I am confident that my skills, dedication, and passion for frontend development will make me a valuable asset to any team. I am looking forward to new challenges and opportunities to learn and grow as a developer. Thank you for considering my application.
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}