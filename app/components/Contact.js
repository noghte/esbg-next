import React from "react";
import Image from "next/image";

const Contact = () => {
    return (
<div className="wrapper style1">
					<section className="container 75%">
						<header className="major">
							<h2>Contact</h2>
							<p></p>
						</header>
						<div id="contact" className="box">
							<div className="row uniform">
								<div className="7u 12u(narrower)">
								<div className="image fit">
									<Image src="images/labpicture.jpg" alt="Lab picture" width="400" height="450" />
								</div>	
									{/* <!--<form method="get" action="MAILTO:nkannan@uga.edu">
										<div className="row uniform 50%">
											<div className="12u">
												<input type="text" name="name" id="name" placeholder="Name" />
											</div>
										</div>
										<div className="row uniform 50%">
											<div className="12u">
												<input type="email" name="email" id="email" placeholder="Email" />
											</div>
										</div>
										<div className="row uniform 50%">
											<div className="12u">
												<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
											</div>
										</div>
										<div className="row uniform 50%">
											<div className="12u">
												<ul className="actions">
													<li><input type="submit" value="Send" /></li>
													<li><input type="reset" className="alt" value="Reset" /></li>
												</ul>
											</div>
										</div>
									</form> --> */}
								</div>
								<div className="5u 12u(narrower)">
									<ul className="labeled-icons">
										<li>
											<h3 className="icon fa-map-marker"><span className="label">Address</span></h3>University of Georgia<br />A318 Life Sciences Building, 
  120 E. Green Street<br />Athens, GA, USA, 30602-7229</li>
										<li>
											(706) 542-1714
  
   <br />
  (706) 542-7326
 
  <h3 className="icon fa-phone"><span className="label">Phone</span></h3></li>
										<li>
											<h3 className="icon fa-envelope"><span className="label">Email</span></h3>
											<a href="mailto:nkannan@uga.edu">nkannan@uga.edu</a>
										</li>
										<li>
											<h3 className="icon fa-twitter"><span className="label">Twitter</span></h3>
											<a href="https://twitter.com/kannanlab?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @kannanlab</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
										</li>
										<li>
											<h3 className="icon fa-google"><span className="label">Google Scholar</span></h3>
											<a href="https://scholar.google.com/citations?user=fab1dOwAAAAJ&hl=en&oi=ao">Google Scholar://kannanlab</a>
										</li>
										<li>
											<h3 className="icon fa-linkedin"><span className="label">LinkedIn</span></h3>
											<a href="https://www.linkedin.com/in/natarajan-kannan-67bb3722/">LinkedIn://Natarajan-Kannan</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
    )
};
export default Contact;