import React from "react";
import Image from "next/image";
import { Black_Han_Sans, Charmonman,  Noto_Serif_Ethiopic  } from 'next/font/google';
const black_han_sans = Black_Han_Sans({ subsets: ['latin'], weight: '400' });
const charmonman = Charmonman({ subsets: ['latin'], weight: '700' });
const noto400 = Noto_Serif_Ethiopic({ subsets: ['latin'], weight: '400' });


const BannerSection = () => {
	return (
		<section id="banner" className={black_han_sans.className}>

			<h2 className={black_han_sans.className}>EVOLUTIONARY SYSTEMS BIOLOGY LAB</h2>
			<h2 className={charmonman.className} style={{fontSize: "30px", color: '#b8f8b6'}}>Kannan Lab </h2> 
			<div className={noto400.className} style={{fontSize: "10px", verticalAlign: "middle"}}>
				<p>Institute of Bioinformatics<br />
				Department of Biochemistry &amp; Molecular Biology<br />
				University of Georgia
				</p>
			</div>
				<ul className="actions" style={{marginTop: "10px"}}>
					<a href="#introduction" className="image featured"><Image src="/images/home.jpg" width={461} height={162} alt="ESBG" /></a>
				</ul>
			</section>
	)
};
export default BannerSection;