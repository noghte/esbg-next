"use client";
import Image from 'next/image';

function chunk(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }
const News = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No news available.</p>;
    }

    // Sorting the news items by date from newest to oldest
    const chunkedData = chunk(data.slice(0, 6), 3);

    return (
        <div className="wrapper style3">
            <section className="container">
            <header className="major">
      <h2><a name="news">News</a></h2>
    </header>
      {chunkedData.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((item, index) => (
            <div key={index} className="4u 12u(narrower)">
              <section className="special">
                <br />
                {/* Conditional rendering of image if exists */}
                <a href={item.attributes.Text || '#'} className="image fit">
                  <Image src={item.attributes.image || '/images/news.png'} width={461} height={162} alt="News Item" />
                </a>
                <p>{item.attributes.PublishDate}</p>
                <a href={item.attributes.Text || '#'}>
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
};

export default News;
