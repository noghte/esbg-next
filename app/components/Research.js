import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper, faBookReader, faPen, faPeopleGroup, faUserGroup, faLaptopCode, faDna, faCircleNodes, faChartSimple, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const Research = () => {
	return (
		<div className="wrapper style2">
  <section className="container">
    <header className="major">
      <h2><a name="research">ONGOING RESEARCH</a></h2>
      <p>This is an overview of current research in the lab. You can click on each title for detailed information.</p>
    </header>
    <div className="row uniform">
      <div className="4u 12u(narrower)">
        <section className="box special">
          <FontAwesomeIcon icon={faDna} size="lg" className="icon major alt" />
          <h3><u><a href="research1">Mapping genome-phenome relationships in large protein families</a></u></h3>
          {/* <p>Proteins are essential components of all living organisms and play critical roles in various biological processes. Many proteins belong to large families with members that share similar structures and functions, and abnormal functioning of proteins is causally associated with metabolic, congenital, and neurodegenerative disorders. Our lab is dedicated to understanding the complex relationships connecting sequence, structure and function, and disease in biomedically important protein families with the ultimate goal of developing new personalized therapies.</p> */}
		  <p>Proteins are essential for life and their malfunctions are linked to diseases. Our lab studies these complex molecules to develop new therapies.</p>
          <a href="research1" className="button alt">READ MORE</a>
        </section>
      </div>
      <div className="4u 12u(narrower)">
        <section className="box special">
          <FontAwesomeIcon icon={faCircleNodes} size="lg" className="icon major alt" />
          <h3><u><a href="research2">AI and Deep learning models for biochemical applications</a></u></h3>
          {/* <p>Artificial intelligence is the next frontier in biochemistry. In particular, large language models are being employed for the study of biological sequences. Similar to natural language, protein sequences follow grammatical rules defined by evolutionary and physicochemical constraints. We employ deep learning methods to train models that learn this grammar in order to predict post-translational modifications on proteins, broadly cluster enzymes by fold and function, and develop embedding-based trees, akin to phylogenetic trees, for protein classification.</p> */}
		  <p>AI is revolutionizing biochemistry by analyzing protein sequences, like a code, to predict changes, group enzymes, and classify proteins.</p>
          <a href="research2" className="button alt">READ MORE</a>
        </section>
      </div>
      <div className="4u 12u(narrower)">
        <section className="box special">
          <FontAwesomeIcon icon={faChartSimple} size="lg" className="icon major alt" />
          <h3><u><a href="research3">Evolutionary Data Analytics</a></u></h3>
          {/* <p>Large-scale “omic” studies have generated massive amounts of data that needs to be effectively mined to accelerate biomedical research. However, the large and disparate nature of these data sources and formats poses unique challenges in leveraging these datasets for protein research. To address the data integration challenge, we develop user-friendly data analytics platforms to mine and visualize data for comparative proteomics.</p> */}
		  <p>Huge datasets from "omic" studies hold promise for protein research, but require user-friendly tools to analyze this complex information. Our lab builds user friendly tools for researchers.</p>
          <a href="research3" className="button alt">READ MORE</a>
        </section>
      </div>
    </div>
  </section>
</div>

	)
};
export default Research;