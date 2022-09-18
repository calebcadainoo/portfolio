import { BioTitle, InfoGapValue } from 'components/Header';
import React from 'react';
import { ExperienceTab } from '.';

const EducationExperience = () => {
	return (
		<div className="centroid education-exp under-section page-section">
			<h2 className="h2-mid">Education & Experience</h2>
			<div className="quote-box">
				{`"Education`} is what remains after one has forgotten what one has
				learned in school
				{`"`}. - Albert Einstein.
			</div>

			<div className="edu-exp-list">
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
						<BioTitle text={'2019 - Present'} />

						<ExperienceTab
							position={'Lead Web Developer'}
							org={'WayaMoney, Ghana, United Kingdom, Kenya, Nigeria'}
						/>

						<ExperienceTab
							position={'Fullstack Developer'}
							org={'Finer Credit, United Kingdom'}
						/>

						<ExperienceTab
							position={'Frontend Developer'}
							org={'Manymarts, Oslo, Norway'}
						/>

						{/* <ExperienceTab
							position={'Fullstack Developer'}
							org={'WayaMoney, United Kingdom'}
						/> */}
					</InfoGapValue>
				</div>
			</div>
		</div>
	);
};

export default EducationExperience;
