"use client";
import Image from 'next/image';

function getImageUrl(item) {
  // Check if 'Photo' and its nested properties exist
  if (item.attributes.Media?.data?.[0]?.attributes?.url) {
      const filename = item.attributes.Media.data[0].attributes.url.split("/").pop();
      return `/images/${filename}`;
  }
  // Return placeholder if any part is missing
  return '/images/news.png';
}

function chunk(array, size) {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }

  function checkLink(text) {
    // Helper function to check and extract URL if starts with "http://"
    const extractUrl = (possibleUrl) => {
      if (typeof possibleUrl === 'string' && possibleUrl.startsWith('http')) {
        return possibleUrl;
      }
      return '';
    };
  
    // Directly check if text itself is a valid URL
    if (typeof text === 'string') {
      return extractUrl(text);
    }
  
    // Check if text is an array and has a structured property possibly containing a URL
    if (Array.isArray(text) && text.length > 0) {
      if (text[0].children && text[0].children.length > 0) {
        // Iterate over children to find the first valid URL
        for (const child of text[0].children) {
          if (child.type === 'link' && child.url) {
            return extractUrl(child.url);
          } else if (child.type === 'text' && child.value) {
            const foundUrl = extractUrl(child.value);
            if (foundUrl) {
              return foundUrl;
            }
          }
        }
      }
    }
  
    return '';
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
                <div className="image fit">
                  <Image 
                    // src={item.attributes.Media?.data?.[0]?.attributes?.url ?? '/images/news.png'} 
                    src={getImageUrl(item)}
                    width={461} 
                    height={162} 
                    alt="News Item" 
                  />
                </div>
                <p>{item.attributes.PublishDate}</p>
                {/* Check if url is valid and conditionally render <h3> inside or outside <a> */}
                {(() => {
                  const url = checkLink(item.attributes.Text);
                  if (url==='') {
                    return <h3>{item.attributes.Title}</h3>;
                  } else {
                    return (
                      <a href={url}>
                        <h3>{item.attributes.Title}</h3>
                      </a>
                    );
                  }
                })()}
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
