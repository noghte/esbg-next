
// components/NewsComponent.js
import axios from 'axios';

// Preload function
export const preload = async () => {
    void fetchNewsData(); // This starts the data fetching but does not wait for it
};

// Fetch data function used by both preload and the component
export async function fetchNewsData() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_SERVER}/api/news`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        let newsData = response.data["data"]; 
        newsData = newsData.sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt));
        return newsData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Adjust based on your error handling
    }
}

export default async function NewsComponent() {
    const attributes = await fetchNewsData(); // Here, await the actual data
    if (!attributes) {
        return <div>Loading failed...</div>;
    }

    return(
<div className="wrapper style3">
            <section className="container">
                <div className="row">
                    {sortedData.slice(0, 6).map((item, index) => (
                        <div key={index} className="4u 12u(narrower)">
                            <section className="special">
                                <br />
                                {/* If there's an image, render it. Note: You'll need to adjust 'item.attributes.image' if your items have images */}
                                <a href={item.attributes.Text || '#'} className="image fit">
                                    <Image src={item.attributes.image || '/images/news.png'} width={461} height={162} alt="News Item" />
                                </a>
                                <p>{item.attributes.PublishDate}</p>
                                <a href={item.attributes.Text || '#'}><h3>{item.attributes.Title}</h3></a>
                                {/* <p>{item.attributes.Text}</p> */}
                            </section>
                        </div>
                    ))}
                </div>

                <br />
            </section>
        </div>
    )

}
