// pages/join.js
import React from 'react';
import axios from 'axios';
import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";
async function getJobData(token) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_SERVER}/api/jobs?sort[0]=createdAt:desc`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const jobData = response.data["data"];
        return jobData;
    } catch (error) {
        console.error('Error fetching job data:', error);
        return []; // Return an empty array if there's an error
    }
}

export async function getStaticProps() {
    const token = process.env.STRAPI_TOKEN_READONLY;
    const jobData = await getJobData(token);

    return {
        props: {
            jobData,
        }
    };
}

const JoinPage = ({ jobData }) => {
    return (
        <div className="wrapper style1">
            <section id="main" className="container">
                <header className="major">
                    <h2>Submit CV</h2>
                </header>
                <div id="page-wrapper">
                    <section className="box">
                        <h3>Postdoctoral Position:</h3>
                        <blockquote>
                            Post-doctoral positions are available to investigate the regulatory mechanisms of protein kinases using computational and experimental techniques. Research experience in molecular biology, molecular evolution, genomics, structural biology or bioinformatics is required. Experience in applying sequence analysis and standard computational tools in a Linux/Unix environment is desirable, but not required. We are an inter-disciplinary research group interested in using the evolutionary information embedded in genomic sequences to understand how signaling proteins, such as protein kinases, work. For more information on what we do, visit our homepage.
                        </blockquote>

                        <hr />

                        <h3>Undergraduate Positions:</h3>
                        <blockquote>
                            Interested in research training in the areas of cancer biology, cell signalling, biochemistry and molecular biology? The Evolutionary Systems Biology Group is seeking enthusiastic undergraduates to work in our laboratory. We are interested in students who can spend at least 5-6 semesters in the lab.
                        </blockquote>
                        <div style={{ padding: "2em", backgroundColor: "#f5fff5" }}>
                            Please submit your CV to Dr. Kannan (nkannan-at-uga.edu) for further consideration.
                        </div>
                    </section>
                </div>

                {/* New Section for Dynamic Job Listings */}
                <section className="box">
                    <header className="major">
                        <h2>Current Job Openings</h2>
                    </header>
                    {jobData.length > 0 ? (
                        jobData.map((job, index) => (
                            <div key={index}>
                                <h3>{job.attributes.Title}</h3>
                                <Markdown children={job.attributes.Description}  />
                                <hr />
                            </div>
                        ))
                    ) : (
                        <div>No job positions available at the moment.</div>
                    )}
                </section>
            </section>
        </div>
    );
};

export default JoinPage;
