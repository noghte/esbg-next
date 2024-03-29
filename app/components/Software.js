import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper, faBookReader, faPen, faPeopleGroup, faUserGroup, faLaptopCode, faDna, faCircleNodes, faChartSimple, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const Software = () => {
	return (
		<div className="wrapper style2">
  <section className="container 75%">
    <header className="major">
      <h2><a name="software">Software</a></h2>
      <a href="software.html" className="button alt">All Software</a>
    </header>
    <div className="row uniform">
      <div className="6u 12u(narrower)">
        <section className="box special">
          <FontAwesomeIcon icon={faLaptopCode} size="md" className="icon major alt" />
          <h3>LATEST SOFTWARE</h3>
          <p>
            <a href="https://doi.org/10.1093/bioinformatics/btad046" className="button alt">PHOSFORMER</a>
            <a href="https://doi.org/10.1101/2022.02.25.482021" className="button alt">ProKinO</a>
            <a href="https://doi.org/10.1093/glycob/cwab082" className="button alt">GTxplorer</a>
          </p>
        </section>
      </div>
      <div className="6u 12u(narrower)">
        <section className="box special">
          <FontAwesomeIcon icon={faCodeBranch} size="md" className="icon major alt" />
          <h3>github</h3>
          <p>
            <a href="https://github.com/esbgkannan" className="button alt">ESBGKANNAN</a>
          </p>
        </section>
      </div>
    </div>
  </section>
</div>

	)
};
export default Software;