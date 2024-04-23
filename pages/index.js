import Image from 'next/image'
// import styles from './page.module.css'
import TopMenu from '../app/components/TopMenu'
import BannerSection from '../app/components/BannerSection'
import Introduction from '../app/components/Introduction'
import Research from '../app/components/Research'
import News from '../app/components/News'
import Software from '../app/components/Software'
import People from '../app/components/People'
import Collaborators from '../app/components/Collaborators'
import axios from 'axios';

async function getLandingPageData(token) {
  try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_SERVER}/api/main-page`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      const attributes = response.data["data"]["attributes"];
      return attributes;
  } catch (error) {
      console.error('Error fetching page description:', error);
      return ''; // Return an empty string or a default description if there's an error
  }
}

async function getNewsData(token) {
  try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_SERVER}/api/news?sort[0]=PublishDate:desc&sort[1]=createdAt:desc`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      let newsData = response.data["data"]; 
      return newsData;
  } catch (error) {
      console.error('Error fetching news data:', error);
      return []; // Return an empty array if there's an error
  }
}

async function getPeopleData(token) {
  try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_SERVER}/api/people?populate=*`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
      const peopleData = response.data["data"];
      return peopleData;
  } catch (error) {
      console.error('Error fetching people data:', error);
      return []; // Return an empty array if there's an error
  }
}


export async function getStaticProps() {
  const token = process.env.STRAPI_TOKEN_READONLY;
  const landingPageAttributes = await getLandingPageData(token);
  const newsData = await getNewsData(token);
  const peopleData = await getPeopleData(token);

  return {
      props: {
          landingPageAttributes,
          newsData,
          peopleData,
      },
  };
}


export default function Home(props) {
  if (!props.landingPageAttributes) {
    return <div>Loading...</div>;
  }
  return (
    <div id="page-wrapper">
      <BannerSection />
      <Introduction data={props.landingPageAttributes} />
      <Research />
      <News data={props.newsData} />
      <Software />
      <People data={props.peopleData} />
      <Collaborators />
    </div>
    // <main className={styles.main}>
    // {/* <HeaderBanner /> */}

    //   {/* <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div> */}

    //   <div>
    //     <MarkdownLoader filePath='/contents/page_news.mdx' />
    //   </div>

      
    // </main>
  )
}
