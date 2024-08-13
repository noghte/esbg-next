
// components/NewsComponent.js
import axios from 'axios';
import Image from 'next/image';

// Preload function
export const preload = async () => {
    void fetchNewsData(); // This starts the data fetching but does not wait for it
};

// Fetch data function used by both preload and the component
export async function fetchNewsData() {
    try {
        const token = process.env.STRAPI_TOKEN_READONLY; 
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_SERVER}/api/news?sort[0]=PublishDate:desc&sort[1]=createdAt:desc`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        let newsData = response.data["data"]; 
        return newsData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Adjust based on your error handling
    }
}
function chunk(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }
  
export default async function NewsComponent() {
    const sortedData = await fetchNewsData(); // await the actual data
    if (!sortedData) {
        return <div>Loading failed...</div>;
    }
    const chunkedData = chunk(sortedData, 3);

    return(
<div className="wrapper style3">
<section className="container">
      {chunkedData.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((item, index) => (
            <div key={index} className="4u 12u(narrower)">
              <section className="special">
                <br />
                {/* Conditional rendering of image if exists */}
                <a href={'#'} className="image fit">
                  <Image src={item.attributes.image || '/images/news.png'} width={461} height={162} alt="News Item" />
                </a>
                <p>{item.attributes.PublishDate}</p>
                <a href={'#'}>
                  <h3>{item.attributes.Title}</h3>
                </a>
                {/* Uncomment below if you want to render Text attribute */}
                {/* <p>{item.attributes.Text}</p> */}
              </section>
            </div>
          ))}
        </div>
      ))}
      <br />
    </section>
        </div>
    )

}
