import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const Nav = () => {
    const CustomLink = ({ to, children, ...props }) => {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

		const active = "bg-yellow-500";

        return (
            <div className={isActive ? `${active}` : ""}>
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
            <h3>Name<br></br>Planetarium</h3>
            <div
				className="flex justify-between w-3/4"
			>
                <CustomLink to="/rgbcove">RGB<br></br>Cove</CustomLink>
                <CustomLink to="/starmachinelamps">StarMachine<br></br>Lamps</CustomLink>
                <CustomLink to="/starmachinemotions">StarMachine<br></br>Motions</CustomLink>
            </div>
        </nav>
    );
};


export default Nav;
