import { useState } from 'react';
import { FaBars, FaX } from "react-icons/fa6";
import logo from '../components/assets/PlanetariumLogo.png';


export default function NewNav() {
	const [state, setState] = useState(false)

	const navigation = [
		{ title: "RGB Cove", path: "/" },
		{ title: "Star Machine Lamps", path: "/starmachinelamps" },
		{ title: "Star Machine Motions", path: "/starmachinemotions" },
	];

	return (
		// <header
		// 	className="
		// 		bg-gray-500
		// 		text-red-500
		// 		w-full
		// 		fixed
		// 		h-12
		// 		top-0
		// 		left-0
		// 		z-10
		// 		ease-in
		// 		duration-300
		// 	"
		// >
			<nav
				className={`
					flex
					flex-row
					justify-between
					items-center
					border-2
					bg-gray-500
					text-red-500
					w-full
					fixed
					h-12
					top-0
					left-0
					z-10
					ease-in
					duration-300
					md:text-sm
					${state ? "shadow-lg rounded-xl border-red-500 border-2 mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}
				`}
			>
				<div
					className="
						gap-x-14
						mx-auto
						px-4
						md:flex
						md:px-8
						border-2
						border-green-500
						w-full
					"
				>
					<div className="flex items-center justify-between md:block">
						<a href="/">
							<img
								src={logo}
								width={48}
								alt="planetarium logo"
							/>
						</a>
						<div className="md:hidden">
							<div
								className=""
								onClick={() => {
									setState(!state);
									// console.log(state);
								}}
							>
								{
									state ? (
										<FaX
											className="text-red-500 hover:text-red-200 text-2xl"
										/>
									) : (
										<FaBars
											className="text-red-500 hover:text-red-200 text-2xl"
										/>
									)
								}
							</div>
						</div>
					</div>

					<div
						className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}
					>
						<ul
							className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0"
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
					</div>
				</div>
			</nav>
		// </header>
	);
};
