"use client";
import Image from 'next/image';

const News= ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No news available.</p>;
    }
	 return (
        <div className="wrapper style3">
            <section className="container">
                <header className="major">
                    <h2>
                        <a name="news">RECENT NEWS</a>
                    </h2>
                    <a href="/news" className="button alt">READ ALL NEWS</a>
                    <a href="/publications" className="button alt">Latest Publications</a>
                </header>

                <div className="row">
    {data.slice(0, 6).map((item, index) => (
        <div key={index} className="4u 12u(narrower)">
            <section className="special">
                <br />
                {/* If there's an image, render it. Note: You'll need to adjust 'item.attributes.image' if your items have images */}
                <a href={item.attributes.Text || '#'} className="image fit">
                    <Image src={item.attributes.image || '/images/news.png'} width={461} height={162} layout="responsive" alt="News Item" />
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
};
export default News;
