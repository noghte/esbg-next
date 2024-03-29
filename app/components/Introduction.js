import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper, faBookReader, faPen, faPeopleGroup, faUserGroup, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Noto_Serif_Ethiopic  } from 'next/font/google';
const noto400 = Noto_Serif_Ethiopic({ subsets: ['latin'], weight: '400' });


const Introduction = ({data}) => {
  return (
	<div className="wrapper style1">
	<section className="container">
		<header className="major">
			<h2><a name="introduction">ESBG LAB</a></h2>
			<p className={noto400.className} style={{fontSize: '1.2em', textAlign: 'justify'}}>{data["Description"] || ''}
			<br />
			<br />
			If you are interested in joining our lab, please get in touch with Dr. Kannan to discuss <a href="/join">current openings and opportunities.</a></p>
		</header>
		
		<div>
  <div className="row uniform">
    <div className="4u 12u(narrower)">
      <section className="box special">
        <FontAwesomeIcon icon={faPen} size="lg" className="icon major" />
        <h3><u><a href="#research">RESEARCH</a></u></h3>
      </section>
    </div>
    <div className="4u 12u(narrower)">
      <section className="box special">
        <FontAwesomeIcon icon={faNewspaper} size="lg" className="icon major" />
        <h3><u><a href="#news">NEWS</a></u></h3>
      </section>
    </div>
    <div className="4u 12u(narrower)">
      <section className="box special">
        <FontAwesomeIcon icon={faBookReader} size="lg" className="icon major" />
        <h3><u><a href="/publications">PUBLICATIONS</a></u></h3>
      </section>
    </div>
  </div>
  <div className="row uniform">
    <div className="4u 12u(narrower)">
      <section className="box special">
        <FontAwesomeIcon icon={faLaptopCode} size="lg" className="icon major" />
        <h3><u><a href="#software">Software</a></u></h3>
      </section>
    </div>
    <div className="4u 12u(narrower)">
      <section className="box special">
        <FontAwesomeIcon icon={faPeopleGroup} size="lg" className="icon major" />
        <h3><u><a href="#people">PEOPLE</a></u></h3>
      </section>
    </div>
    <div className="4u 12u(narrower)">
      <section className="box special">
        <FontAwesomeIcon icon={faUserGroup} size="lg" className="icon major" />
        <h3><u><a href="#collaborators">COLLABORATORS</a></u></h3>
      </section>
    </div>
  </div>
</div>


		
	</section>
</div>
);
};

export default Introduction;
