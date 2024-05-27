import React from "react";

const Research1 = () => {
    return (
        <div>
            <div id="page-wrapper">

            

                {/* Main */}
                <div className="wrapper style1">
                    <section id="main" className="container">
                        <header className="major">
                            <h3>Ongoing research</h3>
                        </header>
                        <div className="row">
                            <div className="8u 12u(narrower)">

                                {/* Content */}
                                <section id="content" className="box">
                                    <a href="#" className="image fit">
                                        <img src="images/research1.png" alt="" />
                                    </a>
                                    <h4>Mapping genome-phenome relationships in large protein families</h4>
                                    <p>The Kannan lab is focused on pursuing rigorous and deep biological questions connecting protein sequence, structure, function, and regulation as an essential step toward inferring causal genome-phenome relationships. We focus on large gene families such as protein kinases, glycosyltransferases, and ion channels that contribute to diverse disease phenotypes such as cancer, diabetes, Alzheimer’s, and Parkinson's'. We deploy systems approaches combining computational and experimental techniques to generate and test models of protein structure, function, evolution, and dynamics. We aim to develop personalized therapeutic strategies based on a deeper understanding of how these proteins work in disease and normal states. Our studies have provided new mechanistic insights into the unique modes of regulation in various protein kinases [1, 2], small molecule kinases [3], and pseudokinases [4] and have revealed the mechanism of action of oncogenic mutations in receptor tyrosine kinases [5]. We have also successfully employed the specialized tools and approaches developed for studying protein kinases to glycosyltransferases [6, 7] and are currently extending these approaches to studying ion channels.</p>
                                </section>
                            </div>
                            <div className="4u 12u(narrower)">

                                {/* Sidebar */}
                                <section id="sidebar" className="box">
                                    <section>
                                        <h3>Selected Publications:</h3>
                                        <ol>
                                            <li><a href="https://www.biorxiv.org/content/biorxiv/early/2023/03/29/2023.03.29.534689.full.pdf">Mechanistic and evolutionary insights into isoform-specific 'supercharging' in DCLK family kinases</a><hr /></li>
                                            <li><a href="https://academic.oup.com/bioinformatics/article/39/2/btad046/7000331">Evolution of Functional Diversity in the Holozoan Tyrosine Kinome</a><hr /></li>
                                            <li><a href="https://www.science.org/doi/10.1126/scisignal.aax6313?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed">A redox-active switch in fructosamine-3-kinases expands the regulatory repertoire of the protein kinase superfamily</a><hr /></li>
                                            <li><a href="https://www.science.org/doi/10.1126/scisignal.aav3810?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed">Tracing the origin and evolution of pseudokinases across the tree of life</a><hr /></li>
                                            <li><a href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003545">Prediction and Prioritization of Rare Oncogenic Mutations in the Cancer Kinome Using Novel Features and Multiple Classifiers</a><hr /></li>
                                            <li><a href="https://www.jbc.org/article/S0021-9258(22)00654-8/fulltext">Modularity of the hydrophobic core and evolution of functional diversity in fold A glycosyltransferases</a><hr /></li>
                                            <li><a href="https://elifesciences.org/articles/54532">Deep evolutionary analysis reveals the design principles of fold A glycosyltransferases</a><br /><br />
                                                <a href="/publications" className="button alt">View all publications</a><hr /></li>
                                        </ol>
                                    </section>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Research1;
