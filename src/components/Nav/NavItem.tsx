import React from 'react';
// import { Link } from 'react-router-dom';

interface INavItem {
	title: string;
	uri: string;
}

/**
 *
 * @param title - text representation
 * @param uri - the link to navigate to
 * @example <NavItem title={'Work'} uri={'#work'} />
 * @returns NavItem Component
 */
const NavItem = ({ title, uri }: INavItem) => {
	return (
		<a href={uri} className="nav-item">
			{title}
		</a>
	);
};

export default NavItem;
