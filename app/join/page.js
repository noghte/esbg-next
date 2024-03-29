import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faBookReader, faPen, faPeopleGroup, faUserGroup, faLaptopCode, faDna, faCircleNodes, faChartSimple, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const join = () => {
    return (
        <div className="wrapper style1">
            <section id="main" className="container">
                <header className="major">
                    <h2>Join Us</h2>
                    <p>Research and employment opportunities</p>
                </header>
                <div id="page-wrapper">
                    <section className="box">
                        <h3>Postdoctoral Position:</h3>
                        <blockquote>Post-doctoral positions are available to investigate the regulatory mechanisms of protein kinases using computational and experimental techniques. Research experience in molecular biology, molecular evolution, genomics, structural biology or bioinformatics is required. Experience in applying sequence analysis and standard computational tools in a Linux/Unix environment is desirable, but not required.
                            <br />
                            We are an inter-disciplinary research group interested in using the evolutionary information embedded in genomic sequences to understand how signaling proteins, such as protein kinases, work. For more information on what we do, visit our homepage. Interested candidates should send their CV, including names of three references, to: <a href="mailto:nkannan@uga.edu">nkannan@uga.edu</a></blockquote>

                        <hr />

                        <h3>Undergraduate Positions:</h3>
                        <blockquote>Interested in research training in the areas of cancer biology, cell signalling, biochemistry and molecular biology? The Evolutionary Systems Biology Group is seeking enthusiastic undergraduates to work in our laboratory. We are interested in students who can spend at least 5-6 semesters in the lab.
                            <br />
                            Please contact Dr. Kannan at the Department of Biochemistry and Molecular Biology or by e-mailing: <a href="mailto:nkannan@uga.edu">nkannan@uga.edu</a></blockquote>
                    </section>

                </div>
            </section>
        </div>

    )
};
export default join;

