import { BioTitle, InfoGapValue, MetricsValue } from '.';
import YouTubeIcon from 'assets/youtube.png';
import socials from 'assets/socials.json';
import UpRightIcon from 'assets/up-right-arrow.png';

/**
 * Assembles all components required for the Hompage Header
 * @returns Home Page Header
 */
const Header = () => {
	return (
		<header className="portfolio-header centroid under-section">
			<h1 className="h1-huge">
				Caleb Crosby Adainoo <br />
				Software Engineer & YouTuber
				<br />
				Works Remotely
			</h1>

			<div className="portfolio-spacer"></div>

			<section className="portfolio-clues">
				{/* BIO */}
				<div className="portfolio-header-bio">
					{/* bio */}
					<InfoGapValue>
						<BioTitle text="Biography" />
						<p className="portfolio-info-content">
							Work for money and design for love! I’m Crosby, a Software
							Engineer & YouTuber based in Ghana. Working remotely.
						</p>
					</InfoGapValue>

					{/* contact */}
					<InfoGapValue>
						<BioTitle text="Contact" />
						<p className="portfolio-info-content">
							Cape Coast, Ghana <br />
							calcronoo@gmail.com <br />
							<a href="tel:+233548070461" className="a-hover">
								+233 548 070 461
							</a>
						</p>
					</InfoGapValue>

					{/* services */}
					<InfoGapValue>
						<BioTitle text="Services" />
						<p className="portfolio-info-content">
							Web Application <br />
							Mobile Application <br />
							Mentoring, YouTube
						</p>
					</InfoGapValue>
				</div>

				{/* IMAGE */}
				<div className="portfolio-header-image">
					<div className="portfolio-header-image-frame">
						<div className="portfolio-header-image-holder">
							<img
								src="https://images.pexels.com/photos/5876785/pexels-photo-5876785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt=""
							/>
						</div>
					</div>
				</div>

				{/* METRICS */}
				<div className="portfolio-header-metrics">
					<InfoGapValue>
						<BioTitle text="Years of <br/> Experience" hasHTML alignRight />
						<MetricsValue text={'6+'} />
					</InfoGapValue>

					<InfoGapValue>
						<BioTitle text="Years of <br/> Experience" hasHTML alignRight />
						<MetricsValue text={'6+'} />
					</InfoGapValue>

					<InfoGapValue>
						<BioTitle text="Years of <br/> Experience" hasHTML alignRight />
						<MetricsValue text={'6+'} />
					</InfoGapValue>

					<InfoGapValue>
						<BioTitle text="Years of <br/> Experience" hasHTML alignRight />
						<MetricsValue text={'6+'} />
					</InfoGapValue>
				</div>
			</section>

			<div className="portfolio-subscribe">
				<img src={YouTubeIcon} alt="Subscribe to Channel" />
				<a
					href={`${socials.youtube}?sub_confirmation=1`}
					target="_blank"
					rel="noreferrer"
				>
					Subscribe to My YouTube Channel
					<img src={UpRightIcon} alt="Subscribe to YouTube Channel" />
				</a>
			</div>
		</header>
	);
};

export default Header;
