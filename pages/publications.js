// pages/publications.js
import React from 'react';
import axios from 'axios';
import PublicationsComponent from '../app/components/PublicationsComponent';

async function getPublicationsData(token) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_SERVER}/api/publications?populate=*`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const publicationsData = response.data["data"];
        return publicationsData;
    } catch (error) {
        console.error('Error fetching publications data:', error);
        return []; // Return an empty array if there's an error
    }
}

export async function getStaticProps() {
    const token = process.env.STRAPI_TOKEN_READONLY;
    const publicationsData = await getPublicationsData(token);

    return {
        props: {
            publicationsData,
        }
    };
}

const PublicationsPage = ({ publicationsData }) => {
    return (
        <div className="wrapper style1">
            <section id="main" className="container">
                <header className="major">
                    <h2>Publications</h2>
                </header>
                <PublicationsComponent publicationsData={publicationsData} />
            </section>
        </div>
    );
};

export default PublicationsPage;
