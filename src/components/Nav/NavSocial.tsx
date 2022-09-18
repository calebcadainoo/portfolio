interface INavSocial {
	icon: string;
	uri: string;
	alt: string;
}

/**
 *
 * @param icon - icon representation
 * @param uri - the link to navigate to
 * @param alt - alt text of icon
 * @example <NavSocial icon={'icon/path'} uri={'https://link.com'} alt={'Instagram'} />
 * @returns NavItem Component
 */
const NavSocial = ({ icon, uri, alt }: INavSocial) => {
	return (
		<a href={uri} className="nav-social" target={'_blank'} rel="noreferrer">
			<img src={icon} alt={alt} />
		</a>
	);
};

export default NavSocial;
