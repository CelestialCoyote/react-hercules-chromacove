import { useEffect, useState } from 'react';
// import { FaBars } from 'react-icons/fa';
import { FaBars, FaX } from "react-icons/fa6";
import logo from '../components/assets/PlanetariumLogo.png';


export default function NewNav() {
	const [state, setState] = useState(false)

	const navigation = [
		{ title: "RGB Cove", path: "/rgbcove" },
		{ title: "Star Machine Lamps", path: "/starmachinelamps" },
		{ title: "Star Machine Motions", path: "/starmachinemotions" },
	];

	useEffect(() => {
		document.onclick = (e) => {
			const target = e.target;
			if (!target.closest(".menu-btn")) setState(false);
		};
	}, [])


	return (
		// <header
		// 	className="
		// 		bg-gray-500
		// 		text-red-500
		// 		w-full
		// 		fixed
		// 		top-0
		// 		left-0
		// 		z-10
		// 		ease-in
		// 		duration-300
		// 	"
		// >
			<nav
				className={`
					bg-gray-800
					text-red-500
					items-center
					flex
					h-20
					${state ? "mx-2 md:border-none md:mx-2 md:mt-0" : ""}
				`}
			>
				<div
					className="
						items-center
						gap-x-14
						max-w-screen-xl
						mx-auto
						px-4
						md:flex
						md:px-8
					"
				>
					<div className="flex items-center justify-between border-2">
						<a href="/">
							<img
								src={logo}
								width={48}
								alt="planetarium logo"
							/>
						</a>

						<div className="flex items-center md:hidden w-24">
							<button
								className="flex text-red-500 hover:text-green-500 border-2"
								onClick={() => setState(!state)}
							>
								{
									state ? (<FaX className="h-6 w-6" />) : (<FaBars className="h-6 w-6" />)
								}
							</button>
						</div>
					</div>

					<div
						className={`
							flex-1 
							items-center
							mt-8
							md:mt-0
							md:flex
							${state ? 'flex' : 'hidden'}
						`}
					>
						<ul
							className="
								justify-center
								items-center
								space-y-6
								md:flex
								md:space-x-6
								md:space-y-0
							"
						>
							{navigation.map((item, idx) => {
								return (
									<li
										key={idx}
										className="
										text-max_green_yellow-700 
										hover:text-turquoise_green-900
									"
									>
										<a
											href={item.path}
											className="block"
										>
											{item.title}
										</a>
									</li>
								)
							})
							}
						</ul>
						<div
							className="
							flex-1
							gap-x-6
							items-center
							justify-end
							mt-6
							space-y-6
							md:flex
							md:space-y-0
							md:mt-0
						"
						>
							<a
								href="/signup"
								className="
								block
								text-cloud_white-900
								hover:text-cloud_white-500
							"
							>
								Sign Up
							</a>
							<a
								href="/login"
								className="
								flex
								items-center
								justify-center
								gap-x-1
								py-2
								px-4 
								text-cloud_white-900
								font-medium 
								bg-galaxy_black-700 
								hover:bg-galaxy_black-500 
								active:bg-olive-900
								rounded-full
								md:inline-flex
							"
							>
								Log In
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path
										fillRule="evenodd"
										d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</nav>
		// </header>
	);
};
