// import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faNewspaper, faBookReader, faPen, faPeopleGroup, faUserGroup, faLaptopCode, faDna, faCircleNodes, faChartSimple, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


// const HeaderBanner = () => {
//     return (
//         <div id="page-wrapper">

// 			{/* <!-- Header --> */}
// 				<header id="header" className="reveal">
// 					<h1><a href="index.html">ESBG</a></h1>
// 					<nav id="nav">
// 						<ul>
// 							<li style={{ whiteSpace : "nowrap"}}><a href="index.html">Home</a></li>
// 							<li className="opener" style={{WebkitUserSelect:"none", cursor:"pointer", whiteSpace:"nowrap", opacity:1}}>
// 								<a href="#introduction" className="icon fa-angle-down">Menu</a>
								
// 							<ul className="" style={{WebkitUserSelect:"none", display:"none", position:"absolute"}} >
// 									<li style={{ whiteSpace : "nowrap"}}><a href="#research" style={{display: "block"}}>Ongoing Research</a></li>
// 									<li style={{ whiteSpace : "nowrap"}}><a href="#news" style={{display: "block"}}>News</a></li>
// 									<li style={{ whiteSpace : "nowrap"}}><a href="publications.html" style={{display: "block"}}>Publications</a></li>
// 									<li style={{ whiteSpace : "nowrap"}}><a href="#software" style={{display: "block"}}>Software</a></li>
// 									<li style={{ whiteSpace : "nowrap"}}><a href="#people" style={{display: "block"}}>People</a></li>
// 									<li style={{ whiteSpace : "nowrap"}}><a href="#collaborators" style={{display: "block"}}>Collaborators</a></li>
// 									<li style={{ whiteSpace : "nowrap"}}><a href="#contact" style={{display: "block"}}>Contact Us</a></li>
									
									
// 								</ul></li>
// 							<li style={{ whiteSpace : "nowrap"}}><a href="join.html">Join Us</a></li>
// 						</ul>
// 					</nav>
// 				</header>

// 			{/* <!-- Banner --> */}
// 				<section id="banner">
  
// 					<h2>EVOLUTIONARY SYSTEMS BIOLOGY LAB</h2>
// 					<p>Kannan Lab <br /><br /> <font size="2%">Institute of Bioinformatics <br /><font size="2%">Department of Biochemistry &amp; Molecular Biology <br /><font size="2%">University of Georgia</font></font></font></p><font size="2%"><font size="2%"><font size="2%">

// 					<ul className="actions">
// 						<a href="#introduction" className="image featured"><img src="images/home.jpg" alt="" /></a>
// 					</ul>
// 				</font></font></font></section>

// 			{/* <!-- Introduction_1 --> */}
// 				<div className="wrapper style1">
// 					<section className="container">
// 						<header className="major">
// 							<h2><a name="introduction">ESBG LAB</a></h2>
// 							<p>We are an interdisciplinary research group leveraging advances in artificial intelligence, bioinformatics, and systems biochemistry to map the complex relationships connecting protein sequence, structure, function, and evolution. We focus on biomedically important protein families such as protein kinases, glycosyltransferases, and ion channels that are causally associated with human diseases such as cancer, diabetes, and neurodegenerative disorders. We aim to develop personalized therapeutic strategies for these diseases based on a deeper understanding of how these proteins work in normal and disease states.</p>
// 							<br />
// 							<p>If you are interested in joining our lab, please get in touch with Dr. Kannan to discuss <a href="join.html">current openings and opportunities.</a></p>
// 						</header>
						

// <div className="row uniform">
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 									<i className="icon major fa-tint">
// 										<FontAwesomeIcon icon={faPen}  transform="shrink-8" />
// 									</i>
// 									<h3><u><a href="#research">RESEARCH</a></u></h3>
									
// 								</section>
// 							</div>
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 								<i className="icon major fa-tint">
// 										<FontAwesomeIcon icon={faNewspaper} transform="shrink-8" />
// 									</i>
// 									<h3><u><a href="#news">NEWS</a></u></h3>


									
// 								</section>
// 							</div>
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 								<i className="icon major fa-tint">
// 										<FontAwesomeIcon icon={faBookReader} transform="shrink-8" />
// 									</i>



// 									<h3><u><a href="publications.html">PUBLICATIONS</a></u>
// </h3>
									
// 								</section>
// 							</div>
// 						</div><div className="row uniform">
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 								<i className="icon major fa-tint">
// 										<FontAwesomeIcon icon={faLaptopCode} transform="shrink-8" />
// 									</i>
// 									<h3><u><a href="#software">Software</a><u></u></u></h3>
									
// 								</section>
// 							</div>
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 								<i className="icon major fa-tint">
// 										<FontAwesomeIcon icon={faPeopleGroup} transform="shrink-8" />
// 									</i>
// 									<h3><u><a href="#people">PEOPLE</a></u></h3>


									
// 								</section>
// 							</div>
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 								<i className="icon major fa-tint">
// 										<FontAwesomeIcon icon={faUserGroup} transform="shrink-8" />
// 									</i>



// 									<h3><u><a href="#collaborators">COLLABORATORS</a></u>
// </h3>
									
// 								</section>
// 							</div>
// 						</div>
// 					</section>
// 				</div>

// 			{/* <!-- Research_2 --> */}
// 				<div className="wrapper style2">
// 					<section className="container 125%">
// 						<header className="major">
// 							<h2><a name="research">ONGOING RESEARCH</a></h2>
// 							<p>This is an overview of current research in the lab. You can click on each title for detailed information.</p>
// 						</header>
// 						<div className="row uniform">
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 								<i className="icon major alt fa-tint">
// 										<FontAwesomeIcon icon={faDna} transform="shrink-8" />
// 									</i>
// 									<h3><u><a href="research1.html">Mapping genome-phenome relationships in large protein families </a></u></h3>
// 									<p>Proteins are essential components of all living organisms and play critical roles in various biological processes. Many proteins belong to large families with members that share similar structures and functions, and abnormal functioning of proteins is causally associated with metabolic, congenital, and neurodegenerative disorders. Our lab is dedicated to understanding the complex relationships connecting sequence, structure and function, and disease in biomedically important protein families with the ultimate goal of developing new personalized therapies.
									
// 									<br /><br />	
// 									<a href="research1.html" className="button alt">  READ MORE </a>

// 									</p>
// 								</section>
// 							</div>
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 									<i className="icon major alt fa-desktop">
// 										<FontAwesomeIcon icon={faCircleNodes} transform="shrink-8" />
// 									</i>
// 									<h3><u><a href="research2.html">Artificial Intelligence and Deep learning models for biochemical applications 
// 									</a></u></h3>
// 									<p>Artificial intelligence is the next frontier in biochemistry. In particular, large language models are being employed for the study of biological sequences. Similar to natural language, protein sequences follow grammatical rules defined by evolutionary and physicochemical constraints.  We employ deep learning methods to train models that learn this grammar in order to predict post-translational modifications on proteins, broadly cluster enzymes by fold and function, and develop embedding-based trees, akin to phylogenetic trees, for protein classification.

// 									<br /><br />
// 									<a href="research2.html" className="button alt">  READ MORE </a>	
// 									</p>
// 								</section>
// 							</div>
// 						{/* <!-- </div> --> */}
// 						{/* <!-- <div className="row uniform"> --> */}
// 							<div className="4u 12u(narrower)">
// 								<section className="box special">
// 									<i className="icon major alt fa-database">
// 									<FontAwesomeIcon icon={faChartSimple} transform="shrink-8" />
// 									</i>
// 									<br />
// 									<h3><u><a href="research3.html">Evolutionary Data Analytics</a></u></h3>
// 									<br />
// 									<p> Large-scale “omic” studies have generated massive amounts of data that needs to be effectively mined to accelerate biomedical research. However, the large and disparate nature of these data sources and formats poses unique challenges in leveraging these datasets for protein research. To address the data integration challenge, we develop user-friendly data analytics platforms to mine and visualize data for comparative proteomics.
// 									<br />
// 									<br />
// 									<br />
// 									<br />
// 									<a href="research3.html" className="button alt">  READ MORE </a>	
// 									</p>

// 								</section>
// 							</div>
			
// 						</div>
// 					</section>
// 				</div>

// 			{/* <!-- News_3 --> */}
// 				<div className="wrapper style3">
// 					<section className="container">
// 						<header className="major">
// 							<h2>
//   							<a name="news">RECENT NEWS</a>
//   							</h2>
//   <a href="news.html" className="button alt">  READ ALL NEWS </a>
//   <a href="publications.html" className="button alt">  Latest Publications  </a>

// 						</header>

						
// <div className="row"e>
// 							{/* <!-- Template To Change News --> */}
							
	
// 							<div className="4u 12u(narrower)">
// 								<section className="special">
// 									<br />
// 									<a href="./" className="image fit"><img src="images/home.jpg" alt="" /></a><br />
// 									<a href="./"><h3>Dr. Aarya Venkat successfully defends his PhD! Congratulations!</h3></a>
// 									<p>November 1st, 2023</p>
									
// 								</section>
// 							</div>
// 							<div className="4u 12u(narrower)">
// 								<section className="special">
// 									<br />
// 									<a href="./" className="image fit"><img src="images/home.jpg" alt="" /></a><br />
// 									<a href="./"><h3>Dr. Safal Shrestha successfully defends his PhD! Congratulations!</h3></a>
// 									<p>October 30th, 2023</p>

									
// 								</section>
// 							</div>
// 							<div className="4u 12u(narrower)">
// 								<section className="special">
// 									<br />
// 									<a href="https://iob.uga.edu/dr-natarajan-kannan-receives-lamar-dodd-creative-research-award-congratulations-dr-kannan/" className="image fit">
//                                         <img src="images/home.jpg" alt="" /></a><br />
// 									<a href="https://iob.uga.edu/dr-natarajan-kannan-receives-lamar-dodd-creative-research-award-congratulations-dr-kannan/"><h3>Natarajan Kannan receives the Lamar Dodd creative research award! Congratulations!</h3></a>
// 									<p>April 4th, 2023</p>
									
// 								</section>
// 							</div>
// </div>
// <br />



// 					</section>
// 				</div>

				
				
// 				{/* <!-- Software_4 --> */}
// 				<div className="wrapper style2">
// 					<section className="container 75%">
// 						<header className="major">
// 							<h2><a name="software">Software</a></h2>
// 							<a href="software.html" className="button alt">  All Software  </a>
// 						</header>
// 						<div className="row uniform">
// 							<div className="6u 12u(narrower)">
// 								<section className="box special">
// 									<i className="icon major alt fa-desktop">
// 										<FontAwesomeIcon icon={faLaptopCode} transform="shrink-8" />
// 									</i>
// 									<h3>LATEST SOFTWARE</h3>

// <p>
// 									<a href="https://doi.org/10.1093/bioinformatics/btad046" className="button alt">  PHOSFORMER </a>


// 	<br /><br />
// 									<a href="https://doi.org/10.1101/2022.02.25.482021" className="button alt">  ProKinO </a>
  
  
// 	<br /><br />
// 									<a href="https://doi.org/10.1093/glycob/cwab082" className="button alt">  GTxplorer </a>

// </p>
									
// 								</section>
// 							</div>
// 							<div className="6u 12u(narrower)">
// 								<section className="box special">
// 									<i className="icon major alt fa-github">
// 										<FontAwesomeIcon icon={faCodeBranch} transform="shrink-8" />
// 									</i>
// 									<h3>github</h3>
// 									<br />
// 									<br />
// 									<p>
										
// 										<a href="https://github.com/esbgkannan" className="button alt">  ESBGKANNAN </a>
// 										<br /><br />
// 									https://github.com/esbgkannan
									  
// 										<br />
// 										<br />
// </p>
// 								</section>
// 							</div>
// 						</div>
							
									
// 								</section>
// 							</div>
					
// 					{/* </section> */}
// 				</div>
//     )
// };
// export default HeaderBanner;