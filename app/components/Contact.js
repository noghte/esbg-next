import React from "react";
import Image from "next/image";

const Contact = () => {
    return (
<div class="wrapper style1">
					<section class="container 75%">
						<header class="major">
							<h2>Contact</h2>
							<p></p>
						</header>
						<div id="contact" class="box">
							<div class="row uniform">
								<div class="7u 12u(narrower)">
								<div class="image fit">
									<Image src="images/labpicture.jpg" alt="" />
								</div>	
									{/* <!--<form method="get" action="MAILTO:nkannan@uga.edu">
										<div class="row uniform 50%">
											<div class="12u">
												<input type="text" name="name" id="name" placeholder="Name" />
											</div>
										</div>
										<div class="row uniform 50%">
											<div class="12u">
												<input type="email" name="email" id="email" placeholder="Email" />
											</div>
										</div>
										<div class="row uniform 50%">
											<div class="12u">
												<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
											</div>
										</div>
										<div class="row uniform 50%">
											<div class="12u">
												<ul class="actions">
													<li><input type="submit" value="Send" /></li>
													<li><input type="reset" class="alt" value="Reset" /></li>
												</ul>
											</div>
										</div>
									</form> --> */}
								</div>
								<div class="5u 12u(narrower)">
									<ul class="labeled-icons">
										<li>
											<h3 class="icon fa-map-marker"><span class="label">Address</span></h3>University of Georgia<br />A318 Life Sciences Building, 
  120 E. Green Street<br />Athens, GA, USA, 30602-7229</li>
										<li>
											(706) 542-1714
  
   <br />
  (706) 542-7326
 
  <h3 class="icon fa-phone"><span class="label">Phone</span></h3></li>
										<li>
											<h3 class="icon fa-envelope"><span class="label">Email</span></h3>
											<a href="mailto:nkannan@uga.edu">nkannan@uga.edu</a>
										</li>
										<li>
											<h3 class="icon fa-twitter"><span class="label">Twitter</span></h3>
											<a href="https://twitter.com/kannanlab?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @kannanlab</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
										</li>
										<li>
											<h3 class="icon fa-google"><span class="label">Google Scholar</span></h3>
											<a href="https://scholar.google.com/citations?user=fab1dOwAAAAJ&hl=en&oi=ao">Google Scholar://kannanlab</a>
										</li>
										<li>
											<h3 class="icon fa-linkedin"><span class="label">LinkedIn</span></h3>
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