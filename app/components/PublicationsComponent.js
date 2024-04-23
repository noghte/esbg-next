import React from 'react';
import Image from 'next/image';

const PublicationsComponent = ({ publicationsData }) => {
    if (!publicationsData || publicationsData.length === 0) {
        return <p>No publications available.</p>;
    }

    return (
        <section id="content" className="box">
            <a href="#" className="image fit">
                <Image src="/images/pic04.jpg" alt="" width={1222} height={432} layout='responsive'/>
            </a>
            <h3>Publications</h3>
            <ol>
                {publicationsData.map((publication, index) => (
                    <li key={index}>
                        <h3>{publication["attributes"].Title}</h3>
                        <p>{publication["attributes"].Authors}</p>
                        <p>{publication["attributes"].Journal}</p>
                        <a href={publication["attributes"].PubMedLink} className="button small">Article</a>
                        <a href={publication["attributes"].DOI} className="button alt small">DOI</a>
                        <hr />
                    </li>
                ))}
                <li>
                    <a href="https://scholar.google.com/citations?user=fab1dOwAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                </li>
            </ol>
        </section>
    );
};

export default PublicationsComponent;
