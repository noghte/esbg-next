// publications/PublicationsComponent.js
import axios from 'axios';
import Image from 'next/image';

export async function fetchPublicationsData() {
    const token = process.env.STRAPI_TOKEN_READONLY; // Access the token directly inside the function
    if (!token) {
        console.error('Token is undefined');
        return null;
    }

    try {
        const response = await axios.get(`${process.env.DEV_SERVER}/api/publications`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data["data"]; // Adjust based on the actual response structure
    } catch (error) {
        console.error('Error fetching publications:', error);
        return null; // Adjust based on your error handling
    }
}


const PublicationsComponent = async () => {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN_READONLY; // Make sure this is correctly configured in your environment
    const publicationsData = await fetchPublicationsData(token);

    if (!publicationsData) {
        return <div>Loading failed...</div>;
    }

    return (
        <section id="content" className="box">
            <a href="#" className="image fit">
                <Image src="/images/pic04.jpg" alt="" width={1222} height={432} />
            </a>
            <h3>Publications</h3>
            <ol>
                {publicationsData.map((publication, index) => (
                    <li key={index}>
                        {publication["attributes"].Title}
                        <br />
                        <span style={{ fontSize: 'small' }}>{publication["attributes"].Authors}</span>
                        <br />
                        <span style={{ fontSize: 'small' }}>{publication["attributes"].Journal}</span>
                        <br />
                        <br />
                        <a href={publication["attributes"].PubMedLink} className="button small">Article</a>
                        <a href={publication["attributes"].DOI} className="button alt small">DOI</a>
                        <hr />
                    </li>
                ))}
                <li>
                    <a href="https://scholar.google.com/citations?user=fab1dOwAAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a>
                </li>
            </ol>
        </section>
    );
};

export default PublicationsComponent;
