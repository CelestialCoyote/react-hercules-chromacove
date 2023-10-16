const Footer = () => {
    const today = new Date();

    return (
        <footer
			className="
				flex
				justify-center
				bg-slate-800
				text-red-500
				w-full
				p-2
			"
		>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    );
};

export default Footer;
