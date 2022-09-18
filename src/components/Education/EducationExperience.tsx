import { BioTitle, InfoGapValue } from 'components/Header';
import React from 'react';
import { ExperienceTab } from '.';
import LinkedInIcon from 'assets/linkedin.png';
import UpRightIcon from 'assets/up-right-arrow.png';
import socials from 'assets/socials.json';

const EducationExperience = () => {
	return (
		<div className="centroid education-exp under-section page-section">
			<h2 className="h2-mid">Education & Experience</h2>
			<div className="quote-box">
				{`"Education`} is what remains after one has forgotten what one has
				learned in school
				{`"`}. - Albert Einstein.
			</div>

			<section className="edu-exp-list">
				{/* education */}
				<div className="edu-container">
					<InfoGapValue>
						<BioTitle text={'2013 - 2017'} />
						<ExperienceTab
							position={'BSc. Computer Science'}
							org={'University of Cape Coast'}
						/>
						<ExperienceTab
							position={'Science & Building Technology'}
							org={'Academy of Christ The King'}
						/>
					</InfoGapValue>
				</div>

				{/* experience 1 */}
				<div className="exp-container">
					<InfoGapValue>
						<BioTitle text={'2015 - 2018'} />
						<ExperienceTab
							position={'Winner'}
							org={"Facebok's Hack For Big Choices, Impact Hub Accra"}
						/>
						<ExperienceTab
							position={'Participant'}
							org={'Negawatt Challenge Accra, iSpace, Ghana'}
						/>
						<ExperienceTab
							position={'Finalist'}
							org={'MTN Apps Challenge, Ghana'}
						/>
						<ExperienceTab
							position={'Digital Marketer'}
							org={'Christina M. Dukes, Chicago, Illinois, US'}
						/>
					</InfoGapValue>
				</div>

				{/* experience 2 */}
				<div className="exp-container">
					<InfoGapValue>
						<BioTitle text={'2018 - Present'} />

						<ExperienceTab
							position={'Fullstack Developer'}
							org={'Finer Credit, United Kingdom'}
						/>

						<ExperienceTab
							position={'Frontend Developer'}
							org={'Manymarts, Oslo, Norway'}
						/>

						<ExperienceTab
							position={'Lead Web Developer'}
							org={'Wayamoney, United Kingdom'}
						/>

						{/* <ExperienceTab
							position={'Fullstack Developer'}
							org={'WayaMoney, United Kingdom'}
						/> */}
					</InfoGapValue>
				</div>
			</section>

			<div className="portfolio-subscribe">
				<img src={LinkedInIcon} alt="Subscribe to Channel" />
				<a href={socials.linkedin} target="_blank" rel="noreferrer">
					View My LinkedIn Profile
					<img src={UpRightIcon} alt="Subscribe to YouTube Channel" />
				</a>
			</div>
		</div>
	);
};

export default EducationExperience;
