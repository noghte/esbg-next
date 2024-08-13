import React from "react";

const Research = () => {
    return (
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
                                    <img src="images/research3.png" alt="" />
                                </a>
                                <h4>Evolutionary Data Analytics</h4>
                                <p>The Kannan lab is driving significant advancements in evolutionary data mining and analytics in protein research. 
                                    We have developed novel tools like the Multiple Sequence Alignment Ontology (MSAOnt) and KinView [1] for analyzing protein sequence alignments and visualizing complex data about proteins, such as their sequence variations, cancer-related variants, and post-translational modifications. 
                                    Additionally, the team has discovered differential phosphorylation patterns in kinases, identifying novel regulatory features that could have implications for understanding disease. We developed Phosformer [2], a deep learning model that predicts kinase and substrate pairs based on sequence. We also developed KinOrtho [3], an advanced orthology inference method that maps kinase orthologs across various species. In another project, the lab launched GTXplorer [4], an online data analytics platform that connects sequence-structure-function relationships to the evolution of glycosyltransferases, facilitating comparative glycomics. 
                                    These tools and platforms reflect the lab's commitment to develop open source tools to accelerate biological research.</p>
                            </section>
                        </div>
                        <div className="4u 12u(narrower)">
                            {/* Sidebar */}
                            <section id="sidebar" className="box">
                                <section>
                                    <h3>Selected Publications:</h3>
                                    <ol>
                                        <li><a href="https://doi.org/10.1039%2Fc6mb00466k">KinView: a visual comparative sequence analysis tool for integrated kinome research</a><hr /></li>
                                        <li><a href="https://academic.oup.com/bioinformatics/article/39/2/btad046/7000331">Phosformer: an explainable transformer model for protein kinase-specific phosphorylation predictions</a><hr /></li>
                                        <li><a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-021-04358-3">KinOrtho: a method for mapping human kinase orthologs across the tree of life and illuminating understudied kinases</a><hr /></li>
                                        <li><a href="https://doi.org/10.1093/glycob/cwab082">GTXplorer: A portal to navigate and visualize the evolutionary information encoded in fold A glycosyltransferases</a><br /><br />
                                            <a href="publications.html" className="button alt">View all publications</a><hr /></li>
                                    </ol>
                                </section>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Research;
