import YouTubeIcon from 'assets/youtube.png';
import InstagramIcon from 'assets/instagram.png';
import LinkedInIcon from 'assets/linkedin.png';
import TwitterIcon from 'assets/twitter.png';
import socials from 'assets/socials.json';
import { NavSocial } from 'components/Nav';
import UpRightIcon from 'assets/up-right-arrow.png';

const Footer = () => {
	return (
		<footer className="centroid porfolio-footer page-section">
			<div className="copyright">
				&copy; {new Date().getFullYear()} Crosby Roads. All Rights Reserved
			</div>

			<aside className="subscribe">
				<a
					href={'https://youtube.com/crosbyroads?sub_confirmation=1'}
					target="_blank"
					rel="noreferrer"
				>
					Subscribe Now
					<img src={UpRightIcon} alt="subscibe now" />
				</a>
			</aside>

			<aside className="socials">
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
		</footer>
	);
};

export default Footer;
