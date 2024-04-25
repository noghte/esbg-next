"use client";
import React, { useState } from "react";
import Link from 'next/link';

const TopMenu = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	const handleMouseEnter = () => {
		setDropdownVisible(true);
	};

	const handleMouseLeave = () => {
		setDropdownVisible(false);
	};
	return (
		<>
			{/* Component-specific styles */}
			{/* <style jsx>{`
                .MenuItem {
					white-space: nowrap;
					font-size: smaller;
					text-decoration: none;
					text-transform: none !important;
                }
            `}</style> */}

<header id="header" className="reveal">
            <h1><Link href="/">ESBG</Link></h1>
            <nav id="nav">
                <ul>
                    {/* <li style={{ whiteSpace: "nowrap" }}><Link href="/">Home</Link></li> */}
                    <li style={{ WebkitUserSelect: "none", cursor: "pointer", whiteSpace: "nowrap", opacity: 1 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >

                        <a>▼ Menu 
						</a> 
                        {isDropdownVisible && (
                            <ul className="dropdown-menu" style={{ WebkitUserSelect: "none", backgroundColor: "#2F3B47", display: "block", position: "absolute", listStyleType: "none" }}>
                                <li className="MenuItem"><Link href="/#research">Research</Link></li>
                                <li className="MenuItem"><Link href="/#news">News</Link></li>
                                <li className="MenuItem"><Link href="/publications">Publications</Link></li>
                                <li className="MenuItem"><Link href="/#software">Software</Link></li>
                                <li className="MenuItem"><Link href="/#people">People</Link></li>
                                <li className="MenuItem"><Link href="/#collaborators">Collaborators</Link></li>
                                <li className="MenuItem"><Link href="/#contact">Contact Us</Link></li>
                            </ul>
                        )}
                    </li>
                    <li style={{ whiteSpace: "nowrap", paddingLeft: "30px" }}><Link href="/join">Join Us</Link></li>
                </ul>
            </nav>
        </header>

		</>
	)
};
export default TopMenu;