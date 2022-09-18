import { BioTitle, InfoGapValue, MetricsValue } from '.';

const Header = () => {
	return (
		<header className="portfolio-header centroid">
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
					<div className="portfolio-header-image-frame">hi</div>
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
		</header>
	);
};

export default Header;
