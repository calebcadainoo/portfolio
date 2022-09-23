import 'css/Nav.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavItem, NavSocial } from '.';
import CrosbyLogo from 'assets/crosby-logo.png';
import YouTubeIcon from 'assets/youtube.png';
import InstagramIcon from 'assets/instagram.png';
import LinkedInIcon from 'assets/linkedin.png';
import TwitterIcon from 'assets/twitter.png';
import socials from 'assets/socials.json';

/**
 * The navigation bar of page with icons, links and socials
 * @returns Navigation Bar of Page
 */
const NavBar = () => {
	return (
		<div className="nav-bar">
			<div className="centroid nav-bar-inner">
				{/* NAV LIST */}
				{/* <aside className="nav-list">
					<NavItem title={'Home'} uri={'./'} />
					<NavItem title={'Portfolio'} uri={'#portfolio'} />
					<NavItem title={'Work'} uri={'#work'} />
				</aside> */}

				{/* NAV LOGO */}
				<aside className="nav-logo">
					<img src={CrosbyLogo} alt="Crosby's Logo" />
				</aside>

				{/* NAV SOCIALS */}
				<aside className="nav-social-list">
					<NavSocial
						icon={YouTubeIcon}
						uri={`${socials.youtube}?sub_confirmation=1`}
						alt={'YouTube Channel'}
					/>
					<NavSocial
						icon={LinkedInIcon}
						uri={socials.linkedin}
						alt={'LinkedIn Profile'}
					/>
					<NavSocial
						icon={InstagramIcon}
						uri={socials.instagram}
						alt={'Instagram'}
					/>
					<NavSocial
						icon={TwitterIcon}
						uri={socials.twitter}
						alt={'Twitter Profile'}
					/>
				</aside>
			</div>
		</div>
	);
};

export default NavBar;
