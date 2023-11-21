import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import hercules from '../assets/hercules.png';


const Nav = () => {
	const CustomLink = ({ to, children, ...props }) => {
		const resolvedPath = useResolvedPath(to)
		const isActive = useMatch({ path: resolvedPath.pathname, end: true })

		const active = "bg-blue-500 pl-2 pr-2 text-center";

		return (
			<div className={isActive ? `${active}` : "text-center"}>
				<Link to={to} {...props}>
					{children}
				</Link>
			</div>
		);
	};

	return (
		<nav
			className="
				flex
				justify-between
				items-center
				w-100%
				h-12 
				bg-slate-400
			"
		>
			<div className="flex gap-2">
				<img
					src={hercules}
					className="ml-2 h-12 w-12"
				/>
				<h3>Name<br></br>Planetarium</h3>
			</div>

			<div
				className="flex justify-between w-3/4 pl-2 pr-4"
			>
				<CustomLink to="/rgbcove">RGB<br></br>Cove</CustomLink>
				<CustomLink to="/starmachinelamps">Star Machine<br></br>Lamps</CustomLink>
				<CustomLink to="/starmachinemotions">Star Machine<br></br>Motions</CustomLink>
			</div>
		</nav>
	);
};


export default Nav;
