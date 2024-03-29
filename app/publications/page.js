// import React from "react";
// import Image from "next/image";

// const publications = () => {
// 	return (
// <div id="page-wrapper">

// {/* <!-- Header --> */}
//     <header id="header">
//         <h1><a href="/">ESBG</a></h1>
//         <nav id="nav">
//             <ul>
//                 <li style={{whiteSpace:"nowrap"}}><a href="/">Home</a></li>
//                 <li className="opener" style={{WebkitUserSelect:"none", cursor:"pointer", whiteSpace:"nowrap", opacity:1}}>
//                     <a href="#" className="icon fa-angle-down">Menu</a>

//                 <ul className="" style={{WebkitUserSelect: "none", display: "none", position: "absolute"}}>
//                         <li style={{whiteSpace:"nowrap"}}><a href="/#research" style={{display: "block"}}>Ongoing Researches</a></li>
//                         <li style={{whiteSpace:"nowrap"}}><a href="/#news" style={{display: "block"}}>News</a></li>
//                         <li style={{whiteSpace:"nowrap"}}><a href="/publications" style={{display: "block"}}>Publications</a></li>
//                         <li style={{whiteSpace:"nowrap"}}><a href="/#softwares" style={{display: "block"}}>Software</a></li>
//                         <li style={{whiteSpace:"nowrap"}}><a href="/#people" style={{display: "block"}}>People</a></li>
//                         <li style={{whiteSpace:"nowrap"}}><a href="/#collaborators" style={{display: "block"}}>Collaborators</a></li>
//                         <li style={{whiteSpace:"nowrap"}}><a href="/#contact" style={{display: "block"}}>Contact Us</a></li>
//                     </ul></li>
//                 <li style={{whiteSpace:"nowrap"}}><a href="/join">Join Us</a></li>
//             </ul>
//         </nav>
//     </header>

// {/* <!-- Main--> */}
//     <div className="wrapper style1">
//         <section id="main" className="container">
//             <header className="major">
//                 <h2>Publications</h2>

//             </header>

//             {/* <!-- Content --> */}
//                 <section id="content" className="box">
//                     <a href="#" className="image fit"><Image src="images/pic04.jpg" alt="" width={400} height={300} /></a>
//                     <h3>Publications</h3>

//                     <ol>

// {/* <!-- Template To Add Publications: --> */}

// {/* <!-- 
// <li>PAPER'S TITLE
// <br />
// <font size="2"> LIST OF AUTHORS SEPARATED BY COMMA </font>
// <br />
// <font size="2.0"> JOURNAL/ CONFERENCE NAME AND DATE </font>
// <br />
// <br />
// <a href="PAPER'S URL ON PUBMED" className="button small">PubMed</a>
// <a href="PAPER'S URL ON DOI" className="button alt small">  DOI  </a>
// <hr />
// </li>
// --> */}
// <a href="https://scholar.google.com/citations?user=fab1dOwAAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a>
// <br /><br />
// <li> Predicting protein and pathway associations for understudied dark kinases using pattern-constrained knowledge graph embedding
// <br />
// <font size="2"> Salcedo, M.V., Gravel, N., Keshavarzi, A., Huang, L.C., Kochut, K.J. and Kannan, N. </font>
// <br />
// <font size="2.0"> PeerJ, 2023 </font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10590106/" className="button small">PubMed</a>
// <a href="https://doi.org/10.7717%2Fpeerj.15815" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Mechanistic and evolutionary insights into isoform-specific 'supercharging' in DCLK family kinases
// <br />
// <font size="2"> Venkat, A., Watterson, G., Byrne, D.P., Boyle, B.O., Shrestha, S., Gravel, N., Fairweather, E.E., Daly, L.A., Bunn, C., Yeung, W., Aggarwal, I, Katiyar, S., Eyers, C.E., Eyers, P.A., and Kannan, N.  </font>
// <br />
// <font size="2.0"> elife, 2023 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/37034755/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1101/2023.03.29.534689" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Prevalence and Homology of the Pneumococcal Serine-Rich Repeat Protein at the Global Scale
// <br />
// <font size="2"> Aceil, J., Venkat, A., Pan, E., Kannan, N. and Avci, F. </font>
// <br />
// <font size="2.0"> Microbiology Spectrum, 2023 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36995217/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1128/spectrum.03252-22" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Structural and biochemical insight into a modular β-1, 4-galactan synthase in plants
// <br />
// <font size="2"> Prabhakar, P.K., Pereira, J.H., Taujale, R., Shao, W., Bharadwaj, V.S., Chapla, D., Yang, J.Y., Bomble, Y.J., Moremen, K.W., Kannan, N., Hammel, M., Adams, P.D., Scheller, H.V., and Urbanowicz, B.R. </font>
// <br />
// <font size="2.0"> Nature Plants, 2023 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36849618/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1038/s41477-023-01358-4" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Phosformer: an explainable transformer model for protein kinase-specific phosphorylation predictions
// <br />
// <font size="2"> Zhou, Z., Yeung, W., Gravel, N., Salcedo, M., Soleymani, S., Li, S. and Kannan, N. </font>
// <br />
// <font size="2.0"> Bioinformatics, 2023 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36692152/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1093/bioinformatics/btad046" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Evolutionary and cellular analysis of the ‘dark’pseudokinase PSKH2
// <br />
// <font size="2"> Byrne, D.P., Shrestha, S., Daly, L.A., Marensi, V., Ramakrishnan, K., Eyers, C.E., Kannan, N. and Eyers, P.A. </font>
// <br />
// <font size="2.0"> Biochemical Journal, 2023 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36520605/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1042/bcj20220474" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Tree visualizations of protein sequence embedding space enable improved functional clustering of diverse protein superfamilies
// <br />
// <font size="2"> Yeung, W., Zhou, Z., Mathew, L., Gravel, N., Taujale, R., O’Boyle, B., Salcedo, M., Venkat, A., Lanzilotta, W., Li, S. and Kannan, N. </font>
// <br />
// <font size="2.0"> Briefings in Bioinformatics, 2023 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36642409/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1093/bib/bbac619" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Alignment-free estimation of sequence conservation for identifying functional sites using protein sequence embeddings
// <br />
// <font size="2"> Yeung, W., Zhou, Z., Li, S. and Kannan, N. </font>
// <br />
// <font size="2.0"> Briefings in Bioinformatics, 2023 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36631405/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1093/bib/bbac599" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Protein kinase inhibitor selectivity “hinges” on evolution
// <br />
// <font size="2"> Shrestha, S., Bendzunas, G. and Kannan, N. </font>
// <br />
// <font size="2.0"> Structure, 2022 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36459973/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1016/j.str.2022.11.004" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Polymerization of the backbone of the pectic polysaccharide rhamnogalacturonan I
// <br />
// <font size="2"> Amos, R.A., Atmodjo, M.A., Huang, C., Gao, Z., Venkat, A., Taujale, R., Kannan, N., Moremen, K.W. and Mohnen, D. </font>
// <br />
// <font size="2.0"> Nature Plants, 2022 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36357524/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1038/s41477-022-01270-3" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li> Mutations in protein kinase Cγ promote spinocerebellar ataxia type 14 by impairing kinase autoinhibition
// <br />
// <font size="2"> Pilo, C.A., Baffi, T.R., Kornev, A.P., Kunkel, M.T., Malfavon, M., Chen, D.H., Rossitto, L.A., Chen, D.X., Huang, L.C., Longman, C. and Kannan, N. </font>
// <br />
// <font size="2.0"> Science signaling, 2022 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/36166510/" className="button small">PubMed</a>
// <a href="https://doi.org/10.1126/scisignal.abk1147" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Modularity of the hydrophobic core and evolution of functional diversity in fold A glycosyltransferases.
// <br />
// <font size="2"> Venkat, A., Tehrani, D., Taujale, R., Yeung, W., Gravel, N., Moremen, K.W. and Kannan, N. </font>
// <br />
// <font size="2.0"> The Journal of biological chemistry, 2022 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/35780833/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1016/j.jbc.2022.102212" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Functional classification and validation of yeast prenylation motifs using machine learning and genetic reporters.
// <br />
// <font size="2"> Berger, B.M., Yeung, W., Goyal, A., Zhou, Z., Hildebrandt, E.R., Kannan, N. and Schmidt, W.K. </font>
// <br />
// <font size="2.0"> PloS one, 2022 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/35749383/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1371/journal.pone.0270128" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Computational tools and resources for pseudokinase research.
// <br />
// <font size="2"> O'Boyle, B., Shrestha, S., Kochut, K., Eyers, P.A. and Kannan, N. </font>
// <br />
// <font size="2.0"> Methods in Enzymology, 2022 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/35525549/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1016/bs.mie.2022.03.040" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Target 2035-update on the quest for a probe for every protein.
// <br />
// <font size="2"> Mueller, S., Ackloo, S., Al Chawaf, A., Al-Lazikani, B., Antolin, A., Baell, J. B., ... Kannan N, ... Arrowsmith, C. H. </font>
// <br />
// <font size="2.0"> RSC Medicinal Chemistry, 2022 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/35211674/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1039/d1md00228g" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Mapping the glycosyltransferase fold landscape using interpretable deep learning.
// <br />
// <font size="2"> Taujale, R., Zhou, Z., Yeung, W., Moremen, K. W., Li, S., and Kannan N </font>
// <br />
// <font size="2.0"> Nature Communications, 2021 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/34580305/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1038/s41467-021-25975-9" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Evolution of Functional Diversity in the Holozoan Tyrosine Kinome.
// <br />
// <font size="2"> Yeung, W., Kwon, A., Taujale, R., Bunn, C., Venkat, A., and Kannan N. </font>
// <br />
// <font size="2.0"> Molecular Biology and Evolution, 2021 </font>
// <br />
// <br />
// <a href="Evolution of Functional Diversity in the Holozoan Tyrosine Kinome." className="button small">PubMed</a>
// <a href="http://doi.org/10.1093/molbev/msab272" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>GTXplorer: A portal to navigate and visualize the evolutionary information encoded in fold A glycosyltransferases.
// <br />
// <font size="2"> Taujale, R., Soleymani, S., Priyadarshi, A., Venkat, A., Yeung, W., Kochut, K. J., and Kannan N. </font>
// <br />
// <font size="2.0"> Glycobiology, 2021 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/34351427/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1016/j.jbc.2021.100843" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Peters plus syndrome mutations affect the function and stability of human beta 1,3-glucosyltransferase.
// <br />
// <font size="2"> Zhang, A., Venkat, A., Taujale, R., Mull, J. L., Ito, A., Kannan N., and Haltiwanger, R. S. </font>
// <br />
// <font size="2.0"> Journal of Biological Chemistry </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/34058199/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1016/j.jbc.2021.100843" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>mTORC2 controls the activity of PKC and Akt by phosphorylating a conserved TOR interaction motif.
// <br />
// <font size="2"> Baffi, T. R., Lorden, G., Wozniak, J. M., Feichtner, A., Yeung, W., Kornev, A. P., ... Kannan N., ... Newton, A. C. </font>
// <br />
// <font size="2.0"> Science Signaling, 2021 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/33850054/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1126/scisignal.abe4509" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Conformational interconversion of MLKL and disengagement from RIPK3 precede cell death by necroptosis.
// <br />
// <font size="2"> Garnish, S.E., Meng, Y., Koide, A., Sandow, J.J., Denbaum, E., Jacobsen, A.V., Yeung, W., Samson, A.L., Horne, C.R., ... Kannan, N. ... and Young, S.N. </font>
// <br />
// <font size="2.0"> Nature Communications, 2021 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/33850121/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1038/s41467-021-22400-z" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Granulovirus PK-1 kinase activity relies on a side-to-side dimerization mode centered on the regulatory αC helix.
// <br />
// <font size="2"> Oliver, M.R., Horne, C.R., Shrestha, S., Keown, J.R., Liang, L.Y., Young, S.N., Sandow, J.J., Webb, A.I., Goldstone, D.C., Lucet, I.S. and Kannan, N. </font>
// <br />
// <font size="2.0"> Nature Communications, 2021 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/33579933/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1038/s41467-021-21191-7" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>KinOrtho: a method for mapping human kinase orthologs across the tree of life and illuminating understudied kinases.
// <br />
// <font size="2"> Huang, L.C., Taujale, R., Gravel, N., Venkat, A., Yeung, W., Byrne, D.P., Eyers, P.A. and Kannan, N. </font>
// <br />
// <font size="2.0"> BMC Bioinformatics, 2021 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/34537014/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1186/s12859-021-04358-3" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>A Chemical Probe for Dark Kinase STK17B Derives Its Potency and High Selectivity through a Unique P-Loop Conformation.
// <br />
// <font size="2"> Picado A, Chaikuad A, Wells CI, Shrestha S, Zuercher WJ, Pickett JE, Kwarcinski FE, Sinha P, de Silva CS, Zutshi R, Liu S, Kannan N, Knapp S, Drewry DH, Willson TM. </font>
// <br />
// <font size="2.0"> J Med Chem, 2020 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/33215924/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1186/s12859-020-03842-6" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Quantitative Structure-Mutation-Activity Relationship Tests (QSMART) model for protein kinase inhibitor response prediction.
// <br />
// <font size="2"> Huang LC, Yeung W, Wang Y, Cheng H, Venkat A, Li S, Ma P, Rasheed K, and Kannan N </font>
// <br />
// <font size="2.0"> BMC Bioinformatics, 2020 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/33183223/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1186/s12859-020-03842-6" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Nucleotide Binding, Evolutionary Insights, and Interaction Partners of the Pseudokinase Unc-51-like Kinase 4.
// <br />
// <font size="2"> Preuss F, Chatterjee D, Mathea S, Shrestha S, St-Germain J, Saha M, Kannan N, Raught B, Rottapel R, and Knapp S. </font>
// <br />
// <font size="2.0"> Structure, 2020 </font>
// <br />
// <br />
// <a href="https://pubmed.ncbi.nlm.nih.gov/32814032/" className="button small">PubMed</a>
// <a href="http://doi.org/10.1016/j.str.2020.07.016" className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>A redox-active switch in fructosamine-3-kinases expands the regulatory repertoire of the protein kinase superfamily
// <br />
// <font size="2">Safal Shrestha, Samiksha Katiyar, Carlos E. Sanz-Rodriguez, Nolan R. Kemppinen, Hyun W. Kim, Renuka Kadirvelraj, Charalampos Panagos, Neda Keyhaninejad, Maxwell Colonna, Pradeep Chopra, Dominic P. Byrne, Geert J. Boons, Esther van der Knaap, Patrick A. Eyers, Arthur S. Edison, Zachary A. Wood, and Natarajan Kannan</font>
// <br />
// <font size="2.0"> Science Signaling, 2020 </font>
// <br />
// <br />
// <a href="http://stke.sciencemag.org/cgi/content/full/sigtrans;13/639/eaax6313?ijkey=p7R6Ysmw2O.tU&keytype=ref&siteid=sigtrans" className="button small">Free Access to Full text</a>
// <a href="http://stke.sciencemag.org/cgi/content/summary/sigtrans;13/639/eaax6313?ijkey=p7R6Ysmw2O.tU&keytype=ref&siteid=sigtrans" className="button small">Summary</a>
// <a href="http://stke.sciencemag.org/cgi/content/abstract/sigtrans;13/639/eaax6313?ijkey=p7R6Ysmw2O.tU&keytype=ref&siteid=sigtrans" className="button small">Abstract</a>
// <a href="http://stke.sciencemag.org/cgi/reprint/sigtrans;13/639/eaax6313?ijkey=p7R6Ysmw2O.tU&keytype=ref&siteid=sigtrans" className="button small">Reprint</a>
// <a href="https://doi.org/10.1126/scisignal.aax6313 " className="button alt small">  DOI  </a>
// <hr />
// </li>
// <li>Deep evolutionary analysis reveals the design principles of fold A glycosyltransferases
// <br />
// <font size="2"> Rahil Taujale, Aarya Venkat, Liang-Chin Huang, Zhongliang Zhou, Wayland Yeung, Khaled M Rasheed, Sheng Li, Arthur S Edison, Kelley W Moremen, Natarajan Kannan</font>
// <br />
// <font size="2.0"> eLife, 2020 </font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7185993/" className="button small">PubMed</a>
// <a href="https://doi.org/10.7554/eLife.54532" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Emerging roles of the αC‐β4 loop in protein kinase structure, function, evolution, and disease
// <br />
// <font size="2">Wayland Yeung, Zheng Ruan, Natarajan Kannan</font>
// <br />
// <font size="2.0"> IUBMB Life, 2020 </font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/32101380" className="button small">PubMed</a>
// <a href=" https://doi.org/10.1002/iub.2253" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Cataloguing the dead: breathing new life into pseudokinase research
// <br />
// <font size="2">Safal Shrestha, Dominic P. Byrne, John A. Harris, Natarajan Kannan, Patrick A. Eyers</font>
// <br />
// <font size="2.0"> The FEBS Journal, 2020 </font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/32053275" className="button small">PubMed</a>
// <a href="https://doi.org/10.1111/febs.15246" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Tracing the origin and evolution of pseudokinases across the tree of life
// <br />
// <font size="2">Annie Kwon, Steven Scott, Rahil Taujale, Wayland Yeung, Krys J. Kochut, Patrick A. Eyers, and Natarajan Kannan </font>
// <br />
// <font size="2.0"> Science Signaling, 2019, 12(578) </font>
// <br />
// <br />
// <a href="https://stke.sciencemag.org/content/12/578/eaav3810" className="button small">PubMed</a>
// <a href="10.1126/scisignal.aav3810" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Covalent inhibitors of EGFR family protein kinases induce degradation of human Tribbles 2 (TRIB2) pseudokinase in cancer cells
// <br />
// <font size="2">Daniel M. Foulkes, Dominic P. Byrne, Wayland Yeung, Safal Shrestha, Fiona P. Bailey, Samantha Ferries, Claire E. Eyers, Karen Keeshan, Carrow Wells, David H. Drewry, William J. Zuercher, Natarajan Kannan, and Patrick A. Eyers </font>
// <br />
// <font size="2.0">Science Signaling, 2018, 11(549) </font>
// <br />
// <br />
// <a href="http://stke.sciencemag.org/content/11/549/eaat7951" className="button small">PubMed</a>
// <a href="10.1126/scisignal.aat7951" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Substrate binding allosterically relieves autoinhibition of the pseudokinase TRIB1
// <br />
// <font size="2">Sam A. Jamieson1, Zheng Ruan, Abigail E. Burgess, Jack R. Curry, Hamish D. McMillan, Jodi L. Brewster, Anita K. Dunbier, Alison D. Axtman, Natarajan Kannan, and Peter D. Mace</font>
// <br />
// <font size="2.0">Science Signaling, 2018, 11(549)  </font>
// <br />
// <br />
// <a href="http://stke.sciencemag.org/content/11/549/eaau0597" className="button small">PubMed</a>
// <a href="10.1126/scisignal.aau0597 " className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Altered conformational landscape and dimerization dependency underpins the activation of EGFR by αC–β4 loop insertion mutations
// <br />
// <font size="2"> Z Ruan, N Kannan </font>
// <br />
// <font size="2.0"> Proceedings of the National Academy of Sciences, 201803152 </font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/30104348" className="button small">PubMed</a>
// <a href="http://www.pnas.org/content/115/35/E8162.long" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Coupled regulation by the juxtamembrane and sterile α motif (SAM) linker is a hallmark of ephrin tyrosine kinase evolution
// <br />
// <font size="2"> A Kwon, M John, Z Ruan, N Kannan </font>
// <br />
// <font size="2.0"> Journal of Biological Chemistry 293 (14), 5102-5116 </font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/29432127" className="button small">PubMed</a>
// <a href="http://www.jbc.org/content/293/14/5102" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Characterization of a cytoplasmic glucosyltransferase that extends the core trisaccharide of the Toxoplasma Skp1 E3 ubiquitin ligase subunit.
// <br />
// <font size="2">Rahman K, Mandalasi M, Zhao P, Sheikh MO, Taujale R, Kim HW, van der Wel H, Matta K, Kannan N, Glushka JN, Wells L, West CM.</font>
// <br />
// <font size="2.0">The Journal of biological chemistry. 2017; 292(45):18644-18659</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/28928220" className="button small">PubMed</a>
// <a href="http://www.jbc.org/content/292/45/18644" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Conformationally constrained peptides target the allosteric kinase dimer interface and inhibit EGFR activation
// <br />
// <font size="2"> Fulton MD, Hanold LE, Ruan Z, Patel S, Beedle AM, Kannan N, Kennedy EJ</font>
// <br />
// <font size="2"> Bioorg Med Chem. 2017; Available online</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/28911855" className="button small">PubMed</a>
// <a href="http://www.sciencedirect.com/science/article/pii/S0968089617314670" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>The Hippo Pathway Maintains the Equatorial Division Plane in the Ciliate Tetrahymena
// <br />
// <font size="2"> Jiang YY, Maier W, Baumeister R, Minevich G, Joachimiak E, Ruan Z, Kannan N, Clarke D, Frankel J, Gaertig J</font>
// <br />
// <font size="2"> Genetics 2017; 206(2):873-888</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/28413159" className="button small">PubMed</a>
// <a href="http://www.genetics.org/content/206/2/873.long" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Classifying kinase conformations using a machine learning approach
// <br />
// <font size="2"> McSkimming D, Rasheed K, Kannan N</font>
// <br />
// <font size="2"> BMC Bioinformatics 2017; 18:86</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5290640/" className="button small">PubMed</a>
// <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5290640/" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Cancer progression by reprogrammed BCAA metabolism in myeloid leukaemia
// <br />
// <font size="2"> Hattori A, Tsunoda M, Konuma T, Kobayashi M, Nagy T, Glushka J, Tayyari F, McSkimming D, Kannan N, Tojo A, Edison AS, Ito T</font>
// <br />
// <font size="2"> Nature 2017; 545(7655):500-504</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/28514443" className="button small">PubMed</a>
// <a href="https://www.nature.com/nature/journal/v545/n7655/full/nature22314.html" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>RNA binding protein MSI2 positively regulates FLT3 expression in myeloid leukemia
// <br />
// <font size="2"> Hattori A, McSkimming D, Kannan N, Ito T</font>
// <br />
// <font size="2"> Leuk Res. 2017; 54:47-54</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/28107692" className="button small">PubMed</a>
// <a href="http://www.sciencedirect.com/science/article/pii/S0145212617300152" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Computational and Experimental Characterization of Patient Derived Mutations Reveal an Unusual Mode of Regulatory Spine Assembly and Drug Sensitivity in EGFR Kinase
// <br />
// <font size="2"> Ruan Z, Katiyar S, Kannan N.</font>
// <br />
// <font size="2"> Biochemistry 2016; 22:22-32</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/27936599" className="button small">PubMed</a>
// <a href="http://pubs.acs.org/doi/abs/10.1021/acs.biochem.6b00572" className="button alt small">  DOI  </a>
// <hr />
// </li>


// <li>Tribbles in the 21st Century: The Evolving Roles of Tribbles Pseudokinases in Biology and Disease
// <br />
// <font size="2"> Eyers PA, Keeshan K, Kannan N.</font>
// <br />
// <font size="2"> Trends Cell Biol. 2016</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/27908682" className="button small">PubMed</a>
// <a href="http://www.sciencedirect.com/science/article/pii/S0962892416301787" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>KinView: a visual comparative sequence analysis tool for integrated kinome research
// <br />
// <font size="2"> McSkimming DI, Dastgheib S, Baffi TR, Byrne DP, Ferries S, Scott ST, Newton AC, Eyers CE, Kochut KJ, Eyersd PA, Kannan N.</font>
// <br />
// <font size="2.0"> Mol Biosyst. 2016; 12(12):3651-3665 </font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/27731453" className="button small">PubMed</a>
// <a href="http://pubs.rsc.org/en/content/articlelanding/2016/mb/c6mb00466k#!divAbstract" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Cerebellar Ataxia and Coenzyme Q Deficiency through Loss of Unorthodox Kinase Activity
// <br />
// <font size="2">Stefely JA, Licitra F, Laredj L, Reidenbach AG, Kemmerer ZA, Grangeray A, Jaeg-Ehret T, Minogue CE, Ulbrich A, Hutchins PD, Wilkerson EM, Ruan Z, Aydin D, Hebert AS, Guo X, Freiberger EC, Reutenauer L, Jochem A, Chergova M, Johnson IE, Lohman DC, Rush MJ, Kwiecien NW, Singh PK, Schlagowski AI, Floyd BJ, Forsman U, Sindelar PJ, Westphall MS, Pierrel F, Zoll J, Dal Peraro M, Kannan N, Bingman CA, Coon JJ, Isope P, Puccio H, Pagliarini DJ.</font>
// <br />
// <font size="2.0">Mol Cell. 2016; 63(4):608-620</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/27499294" className="button small">PubMed</a>
// <a href="http://www.sciencedirect.com/science/article/pii/S109727651630288X" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Hydrophobic Core Variations Provide a Structural Framework for Tyrosine Kinase Evolution and Functional Specialization
// <br />
// <font size="2"> Mohanty S, Oruganty K, Kwon A, Byrne DP, Ferries S, Ruan Z, Hanold LE, Katiyar S, Kennedy EJ, Eyers PA, Kannan N. </font>
// <br />
// <font size="2.0"> PLoS Genet. 2016; 12(2): </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/26925779" className="button small">PubMed</a>
// <a href="http://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1005885" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Identification and classification of small molecule kinases: insights into substrate recognition and specificity
// <br />
// <font size="2">Oruganty K, Talevich E, Neuwald AF, Kannan N.</font>
// <br />
// <font size="2.0">BMC Evolutionary Biology 2016; 16(7):</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4702295/" className="button small">PubMed</a>
// <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4702295/" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Creating Biomedical Ontologies Using mOntage
// <br />
// <font size="2">Dastgheib S, McSkimming DI, Kannan N, Kochut K.</font>
// <br />
// <font size="2.0">Data Integration in the Life Sciences (Book Chapter) 2015; 9162:</font>
// <br />
// <br />
// <a href="https://link.springer.com/chapter/10.1007/978-3-319-21843-4_9" className="button small">PubMed</a>
// <a href="https://link.springer.com/chapter/10.1007/978-3-319-21843-4_9" className="button alt small">  DOI  </a>
// <hr />
// </li>


// <li>The Ty1 Retrotransposon Restriction Factor p22 Targets Gag
// <br />
// <font size="2">Tucker JM, Larango ME, Wachsmuth LP, Kannan N, Garfinkel DJ.</font>
// <br />
// <font size="2.0">PLoS Genetics 2015; 11(10):</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/PMC4599808" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1371/journal.pgen.1005571" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Mechanistic Insights into R776H Mediated Activation of Epidermal Growth Factor Receptor (EGFR) Kinase
// <br />
// <font size="2">Ruan Z, Kannan N.</font>
// <br />
// <font size="2.0">Biochemistry 2015; 54(27):4216-4225</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/26101090" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1021/acs.biochem.5b00444" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Dialing in EGFR Signaling
// <br />
// <font size="2">Kennedy EJ, Kannan N.</font>
// <br />
// <font size="2.0">Chem Biol. 2015; 22(6):687-688</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/26091165" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1016/j.chembiol.2015.06.001" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Integration of signaling in the kinome: Architecture and regulation of the alphaC Helix
// <br />
// <font size="2">Taylor SS, Shaw AS, Kannan N, Kornev AP.</font>
// <br />
// <font size="2.0">Biochim Biophys Acta. 2015; 1854:1567-1574</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25891902" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1016/j.bbapap.2015.04.007" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Structural and evolutionary divergence of cyclic nucleotide binding domains in eukaryotic pathogens: Implications for drug design
// <br />
// <font size="2">Mohanty S, Kennedy EJ, Herberg FW, Hui R, Taylor SS, Langsley G, Kannan N.</font>
// <br />
// <font size="2.0">Biochim Biophys Acta. 2015; 1854:
// </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25847873" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1016/j.bbapap.2015.03.012" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Co-Conserved MAPK Features Couple D-Domain Docking Groove to Distal Allosteric Sites via the C-Terminal Flanking Tail
// <br />
// <font size="2">Nguyen T, Ruan Z, Oruganty K, Kannan N.</font>
// <br />
// <font size="2.0">PLoS One 2015; 10(3):</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25799139" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1371/journal.pone.0119636" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Inhibiting EGFR Dimerization Using Triazolyl-Bridged Dimerization Arm Mimics
// <br />
// <font size="2">Hanold LE, Oruganty K, Ton NT, Beedle AM, Kannan N, Kennedy EJ.</font>
// <br />
// <font size="2.0">PLoS One 2015; 10(3):</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25790232" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1371/journal.pone.0118796" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>ProKinO: a unified resource for mining the cancer kinome
// <br />
// <font size="2">McSkimming DI, Dastgheib S, Talevich E, Narayanan A, Katiyar S, Taylor SS, Kochut K, Kannan N.</font>
// <br />
// <font size="2.0">Hum Mutat. 2015; 36(2):175-186</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25382819" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1002/humu.22726" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Going for broke: Targeting the human cancer pseudokinome
// <br />
// <font size="2">MBailey FP, Byrne DP, McSkimming D, Kannan N, Eyers PA.</font>
// <br />
// <font size="2.0">Biochem J. 2015; 467(2):195-211</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25559089" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1042/BJ20141060" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>The Tribbles 2 (TRB2) pseudokinase binds to ATP and autophosphorylates in a metal-independent manner
// <br />
// <font size="2">Bailey FP, Byrne DP, Oruganty K, Eyers CE, Novotny CJ, Shokat KM, Kannan N, Eyers PA.</font>
// <br />
// <font size="2.0">Biochem J. 2015; 467(1):</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25583260" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1042/BJ20141441" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Mitochondrial ADCK3 Employs an Atypical Protein Kinase-like Fold to Enable Coenzyme Q Biosynthesis
// <br />
// <font size="2">Stefely JA, Reidenbach AG, Ulbrich A, Oruganty K, Floyd BJ, Jochem A, Saunders JM, Johnson IE, Minogue CE, Wrobel RL, Barber GE, Lee D, Li S, Kannan N, Coon JJ, Bingman CA, Pagliarini DJ.</font>
// <br />
// <font size="2.0">Mol Cell. 2014; 57(1):</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25498144" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1016/j.molcel.2014.11.002" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Kinase Regulation by Hydrophobic Spine Assembly in Cancer
// <br />
// <font size="2">Hu J, Ahuja LG, Meharena HS, Kannan N, Kornev AP, Taylor SS, Shaw AS.</font>
// <br />
// <font size="2.0">Mol Cell Biol. 2014; 35(1):</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/25348715" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1128/MCB.00943-14" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Prediction and Prioritization of Rare Oncogenic Mutations in the Cancer Kinome Using Novel Features and Multiple Classifiers
// <br />
// <font size="2">U M, Talevich E, Katiyar S, Rasheed K, Kannan N.</font>
// <br />
// <font size="2.0">PLoS Comput Biol. 2014; 10(4):</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/24743239" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1371/journal.pcbi.1003545" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Deciphering the Structural Basis of Eukaryotic Protein Kinase Regulation
// <br />
// <font size="2">Meharena HS, Chang P, Keshwani MM, Oruganty K, Nene AK, Kannan N, Taylor SS, Kornev AP.</font>
// <br />
// <font size="2.0">PLoS Biol 2013; 11(10):</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/24143133" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1371/journal.pbio.1001680" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Global Analysis of Protein Expression and Phosphorylation of Three Stages of Plasmodium falciparum Intraerythrocytic Development
// <br />
// <font size="2">Pease BN, Huttlin EL, Jedrychowski MP, Talevich E, Harmon J, Dillman T, Kannan N, Doerig C, Chakrabarti R, Gygi SP, Chakrabarti D.</font>
// <br />
// <font size="2.0">J Proteome Res. 2013; 12(9):4028-4045</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/23914800" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1021/pr400394g" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Structural and evolutionary adaptation of rhoptry kinases and pseudokinases, a family of coccidian virulence factors
// <br />
// <font size="2">Talevich E, Kannan N.</font>
// <br />
// <font size="2.0">BMC Evol. Biol. 2013; 13:117</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/23742205" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1186/1471-2148-13-117" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Evolutionary variation and adaptation in a conserved protein kinase allosteric network: Implications for inhibitor design
// <br />
// <font size="2">Oruganty K, Kannan N.</font>
// <br />
// <font size="2.0">Biochim. Biophys. Acta 2013; 1834(7):1322-1329</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/23499783" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1016/j.bbapap.2013.02.040" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Identification of a hidden strain switch provides clues to an ancient structural mechanism in protein kinases
// <br />
// <font size="2">Oruganty K, Talathi NS, Wood ZA, Kannan N.</font>
// <br />
// <font size="2.0">PNAS 2012; 110(3):924-929</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/23277537" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1073/pnas.1207104110" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Peptidyl-prolyl isomerase Pin1 controls down-regulation of conventional protein kinase C isozymes.
// <br />
// <font size="2">Abrahamsen H, O'Neill AK, Kannan N, Kruse N, Taylor SS, Jennings PA, Newton AC.</font>
// <br />
// <font size="2.0">J BIol Chem. 2012: 287(16):13262-78</font>
// <br />
// <br />
// <a href="https://www.ncbi.nlm.nih.gov/pubmed/22318721" className="button small">PubMed</a>
// <a href="http://www.jbc.org/content/287/16/13262" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Design principles underpinning the regulatory diversity of protein kinases
// <br />
// <font size="2">Oruganty K, Kannan N.</font>
// <br />
// <font size="2.0">Philos. Trans. B 2012; 367(1602):2517-28</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/22889905" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1098/rstb.2012.0015" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>An evolutionary perspective on the kinome of malaria parasites
// <br />
// <font size="2">Talevich E, Tobin AB, Kannan N, Doerig C.</font>
// <br />
// <font size="2.0">Philos. Trans. B 2012; 367(1602):2607-18</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/22889911" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1098/rstb.2012.0014" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>ProKinO: An Ontology for Integrative Analysis of Protein Kinases in Cancer
// <br />
// <font size="2">Gosal G, Kochut KJ, Kannan N.</font>
// <br />
// <font size="2.0">PLoS One 2011; 6(12):e28782</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/22194913" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1371/journal.pone.0028782" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Structural and evolutionary divergence of eukaryotic protein kinases in Apicomplexa
// <br />
// <font size="2">Talevich E, Mirza A, Kannan N.</font>
// <br />
// <font size="2.0">BMC Evol. Biol. 2011; 11:321</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/22047078" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1186/1471-2148-11-321" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Conformational regulation of the EGFR kinase core by the juxtamembrane and C-terminal tail: A molecular dynamics study
// <br />
// <font size="2">Mustafa M, Mirza A, Kannan N.</font>
// <br />
// <font size="2.0">Proteins 2011; 79(1):99-114</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/20938978" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1002/prot.22862" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Co-conserved features associated with cis regulation of ErbB tyrosine kinases
// <br />
// <font size="2">Mirza A, Mustafa M, Talevich E, Kannan N.</font>
// <br />
// <font size="2.0">PLoS One 2010; 5(12):e14310</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/21179209" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1371/journal.pone.0014310" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Comparative surface geometry of the protein kinase family
// <br />
// <font size="2">Thompson EE, Kornev AP, Kannan N, Kim C, Ten Eyck LF, Taylor SS.</font>
// <br />
// <font size="2.0">Protein Sci. 2009; 18(10):2016-26</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/19610074" className="button small">PubMed</a>
// <hr />
// </li>

// <li>A chimeric mechanism for polyvalent trans-phosphorylation of PKA by PDK1
// <br />
// <font size="2">Romano RA, Kannan N, Kornev AP, Allison CJ, Taylor SS.</font>
// <br />
// <font size="2.0">Protein Sci. 2009; 18(7):1486-97</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/19530248" className="button small">PubMed</a>
// <hr />
// </li>

// <li>The chaperones Hsp90 and Cdc37 mediate the maturation and stabilization of protein kinase C through a conserved PXXP motif in the C-terminal tail
// <br />
// <font size="2">Gould CM, Kannan N, Taylor SS, Newton AC.</font>
// <br />
// <font size="2.0">J. Biol Chem. 2009; 284:4921-4935</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/19091746" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Congenital disease SNPs target lineage specific structural elements in protein kinases
// <br />
// <font size="2">Torkamani A, Kannan N, Taylor SS, Schork NJ.</font>
// <br />
// <font size="2.0">PNAS 2008; 105(26):9011-6</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/18579784" className="button small">PubMed</a>
// <a href="http://dx.doi.org/10.1073/pnas.0802403105" className="button alt small">  DOI  </a>
// <hr />
// </li>

// <li>Rethinking pseudokinases
// <br />
// <font size="2">Kannan N, Taylor SS..</font>
// <br />
// <font size="2.0">Cell 2008; 133(2):204-5</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/18423189" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Analogous regulatory sites in ZAP-70 tyrosine kinase and AGC kinases
// <br />
// <font size="2">Kannan N, Neuwald AF, Taylor SS.</font>
// <br />
// <font size="2.0">Biochemica Biophysica Acta 2008; 1784(1):27-32</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/17977811" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Signaling through cAMP and cAMP-dependent protein kinase: Diverse strategies for Drug Design
// <br />
// <font size="2">Taylor SS, Kim C, Cheng CY, Brown SH, Wu J, Kannan N.</font>
// <br />
// <font size="2.0">Biochemica Biophysica Acta 2008; 1784(1):16-26</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/17996741" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Evolution of allostery in the cyclic nucleotide binding module
// <br />
// <font size="2">Kannan N, Wu J, Anand G, Shibu Y, Venter C, Taylor SS.</font>
// <br />
// <font size="2.0">Genome Biol. 2007; 8(12):R264</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/18076763" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Structural and functional diversity of the microbial kinome
// <br />
// <font size="2">Kannan N, Taylor SS, Yufeng Z, Venter C, Manning G.</font>
// <br />
// <font size="2.0">PLoS Biol. 2007; 5(3):e83</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/17355172" className="button small">PubMed</a>
// <hr />
// </li>

// <li>The hallmark of AGC kinase functional divergence is its C-terminal tail, a cis-acting regulatory module
// <br />
// <font size="2">Kannan N, Haste N, Taylor SS, Neuwald AF.</font>
// <br />
// <font size="2.0">PNAS 2007; 104(4):1272-7</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/17227859" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Did protein kinase regulatory mechanisms evolve through elaboration of a simple structural component?
// <br />
// <font size="2">Kannan N, Neuwald AF.</font>
// <br />
// <font size="2.0">J. Mol. Biol. 2005; 351:956-972</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/16051269" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Structural features associated with functional specificity of CMGC protein kinases MAPK, CDK, GSK, SRPK, DYRK and CK2alpha
// <br />
// <font size="2">Kannan N, Neuwald AF.</font>
// <br />
// <font size="2.0">Protein Sci. 2004; 13(8):100-128</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/15273306" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Crystal structure of the E230Q mutant of cAMP-dependent protein kinase reveals an unexpected apoenzyme conformation and an extended N-terminal A helix
// <br />
// <font size="2">Wu J, Yang J, Kannan N, Madhusudhan, Xuong NH, Ten Eyck LF, Taylor SS.</font>
// <br />
// <font size="2.0">Protein Sci. 2005; 14(11):2871-9</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/16253959" className="button small">PubMed</a>
// <hr />
// </li>


// <li>Computational analysis of protein tyrosine phosphatases: practical guide to bioinformatics and data resources
// <br />
// <font size="2">Andersen JN, Kannan N, Gergel J, Neuwald AF, Tonks NK.</font>
// <br />
// <font size="2.0">Methods 2005; 35(1):90-114</font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/15588990" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Ran's C-terminal basic patch and nucleotide exchange mechanisms in light of a canonical structure for Rab, Rho, Ras and Ran GTPases
// <br />
// <font size="2">Neuwald AF, Kannan N, Poleksic A, Hata N, Lu J.</font>
// <br />
// <font size="2.0">Genome Res. 2002; 13(4):673-692 </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/12671004" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Protein structure: Insights from graph theory
// <br />
// <font size="2">Vishveshwara S, Brinda KV, Kannan N.</font>
// <br />
// <font size="2.0">J. of Theor. and Comp. Chemistry 2002; 1(1):187-212 </font>
// <br />
// <br />
// <a href="http://mbu.iisc.ernet.in/~vishgp/pdf/graph_review_JTCC.pdf" className="button small">PDF</a>
// <hr />
// </li>

// <li>Analysis of homodimeric protein interfaces using graph spectral method
// <br />
// <font size="2">Brinda KV, Kannan N, Vishveshwara S.</font>
// <br />
// <font size="2.0">Protein Eng. 2002; 15(4):265-77 </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/11983927" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Clusters in alpha/beta barrel proteins: implications for protein structure and folding: a graph theoretical approach
// <br />
// <font size="2">Kannan N, Selvaraj S, Gromiha MM, Vishveshwara S.</font>
// <br />
// <font size="2.0">Proteins 2001; 43(2):103-12 </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/11276080" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Stabilizing interactions in the dimer interface of alpha-subunit in E. coli RNA polymerase: A graph spectral and point mutation study
// <br />
// <font size="2">Kannan N, Chander P, Ghosh P, Vishveshwara S, Chatterji D.</font>
// <br />
// <font size="2.0">Protein Sci. 2001; 10(1):46-54 </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/11266593" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Logos for amino-acid preferences in different backbone packing density regions of protein structural classes
// <br />
// <font size="2">Kannan N, Schneider TD, Vishveshwara S.</font>
// <br />
// <font size="2.0">Acta Crystallog. D 2000; 59(9):1156-65 </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/10957634" className="button small">PubMed</a>
// <hr />
// </li>


// <li>Aromatic clusters: a determinant of thermal stability in thermophilic proteins
// <br />
// <font size="2">Kannan N, Vishveshwara S.</font>
// <br />
// <font size="2.0">Protein Eng. 2000; 13(11):753-61 </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/11161106" className="button small">PubMed</a>
// <hr />
// </li>

// <li>Identification of side-chain clusters in protein structures by a graph spectral method
// <br />
// <font size="2">Kannan N, Vishveshwara S.</font>
// <br />
// <font size="2.0">J. Mol. Biol. 1999; 292(2):441-64 </font>
// <br />
// <br />
// <a href="http://www.ncbi.nlm.nih.gov/pubmed/10493887" className="button small">PubMed</a>
// <hr />
// </li>

//                     </ol>
//                 </section>

//         </section>
//     </div>

// </div>
// 	)
// };
// export default publications;

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Publications = () => {
    const [publications, setPublications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://172.22.150.196:8086/data/publications.json')
            .then(response => response.json())
            .then(data => {
                setPublications(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <section id="content" className="box">
            <a href="#" className="image fit">
                <Image src="images/pic04.jpg" alt="" width={1222} height={432} />
            </a>
            <h3>Publications</h3>
            <ol>
                {publications.map((publication, index) => (
                    <li key={index}>
                        {publication.title}
                        <br />
                        <font size="2">{publication.authors}</font>
                        <br />
                        <font size="2.0">{publication.journal}</font>
                        <br />
                        <br />
                        <a href={publication.url} className="button small">Article</a>
                        <a href={publication.doiUrl} className="button alt small">DOI</a>
                        <hr />
                    </li>
                ))}
                <li>
                    <a href="https://scholar.google.com/citations?user=fab1dOwAAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a>
                </li>
            </ol>
        </section>
    );
};

export default Publications;
