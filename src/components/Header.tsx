import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const scrollToSection = (id: string): void => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}  
	};

	return (
		<section className="">
			<header>
				<div className="box-border p-5 max-w-screen-xl mx-auto">
					<nav
						className="
                            flex flex-wrap
                            items-center
                            justify-between
                            w-full
                            py-4
                            md:py-0
                            px-4
                            text-lg text-gray-700
                            bg-white
                        "
					>
						<div>
							<Link to="/">
								<h1 className="font-bold text-[24px] text-[#c28e1c]">Point Of View LLC</h1>
							</Link>
						</div>

						{menuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="menu-button"
								className="h-[2rem] w-[2rem] cursor-pointer md:hidden block"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								onClick={handleMenu}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="menu-button"
								className="h-[2rem] w-[2rem] cursor-pointer md:hidden block"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								onClick={handleMenu}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}


						<div
							className={`${
								menuOpen ? "block" : "hidden"
							} w-full md:flex md:items-center md:w-auto`}
							id="menu"
						>
							<ul
								className="
                                pt-4
                                text-base text-gray-700
                                flex
                                md:justify-between 
                                md:pt-0
                                flex-col
                                md:flex-row
                                gap-4
                               
                                "
                                
							>
                                <li>
									<Link to="/" 
										className="md:p-4 md:text-[24px] py-2 block hover:text-[#c28e1c] rounded p-2.5 text-[#c28e1c] bg-[#f8f8f8] font-medium  md:bg-white md:font-normal md:text-[#333]"
									>
										Home
									</Link>
								</li>
								<li>
									<a
                                        className="md:p-4 md:text-[24px] py-2 block hover:text-[#c28e1c] rounded p-2.5 text-[#c28e1c] bg-[#f8f8f8] font-medium  md:bg-white md:font-normal md:text-[#333] cursor-pointer"
										onClick={() => scrollToSection("services")}
									>
										Services
									</a>
								</li>
								<li>
                                    <a
										className="md:p-4 md:text-[24px] py-2 block hover:text-[#c28e1c] rounded p-2.5 text-[#c28e1c] bg-[#f8f8f8] font-medium  md:bg-white md:font-normal md:text-[#333] cursor-pointer"
										onClick={() => scrollToSection("contact-us")}
									>
										Contact Us
									</a>
								</li>
								<li>
									<a
										className="md:p-4 md:text-[24px] py-2 block hover:text-[#c28e1c] rounded p-2.5 text-[#c28e1c] bg-[#f8f8f8] font-medium  md:bg-white md:font-normal md:text-[#333]"
										href="http://povblogger.blogspot.com/"
										target="_blank"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										className="md:p-4 md:text-[24px] py-2 block hover:text-[#c28e1c] rounded p-2.5 text-[#c28e1c] bg-[#f8f8f8] font-medium  md:bg-white md:font-normal md:text-[#333]"
										href="https://www.linkedin.com/in/jeremygarlington/"
										target="_blank"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</section>
	);
};

export default Header;
