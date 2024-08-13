import React from "react";

const Research2 = () => {
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
                                    <img src="images/research2.png" alt="" />
                                </a>
                                <h4>Artificial Intelligence and deep learning models for biochemical applications</h4>
                                <p>The Kannan lab is exploring cutting-edge AI research in the field of protein function prediction. One area is understanding and predicting post-translational modifications, which are critical to regulating cellular processes. We developed a unified framework (Phosphormer) [1] using protein language models to generate context-aware features from primary protein sequence data to predict kinase-specific phosphosites. We are working on enabling this model to make accurate phosphosite predictions across the entire kinome and expand to other post-translational modifications. We have further developed workflows and visualization methods to classify protein families using sequence embeddings or feature-rich numerical representations of protein sequences. These embeddings infer proteins' structural and functional properties based solely on sequence information. We successfully applied this in the classification of phosphatases, protein kinases, and the S-Adenosyl-L-Methionine (SAM) enzyme superfamily, generating Neighbor-Joining (NJ) embedding trees as an orthogonal method to phylogeny for visualization of evolutionary information [2, 3, 4]. </p>
                            </section>
                        </div>
                        <div className="4u 12u(narrower)">

                            {/* Sidebar */}
                            <section id="sidebar" className="box">
                                <section>
                                    <h3>Selected Publications:</h3>
                                    <ol>
                                        <li><a href="https://academic.oup.com/bioinformatics/article/39/2/btad046/7000331">Phosformer: an explainable transformer model for protein kinase-specific phosphorylation predictions</a><hr /></li>
                                        <li><a href="https://academic.oup.com/bib/article/24/1/bbac619/6987820">Tree visualizations of protein sequence embedding space enable improved functional clustering of diverse protein superfamilies</a><hr /></li>
                                        <li><a href="https://academic.oup.com/bib/article/24/1/bbac599/6984799">Alignment-free estimation of sequence conservation for identifying functional sites using protein sequence embeddings</a><hr /></li>
                                        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8476585/">Mapping the glycosyltransferase fold landscape using interpretable deep learning</a><br /><br />
                                            <a href="publications" className="button alt">View all publications</a><hr /></li>
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

export default Research2;
