interface IExperienceTab {
	position: string;
	org: string;
}

/**
 * Position / Certificate Held and Organization
 * @param position -  the position/title held in organization
 * @param org -  the organization you had experience
 * @returns Experience Tab Component
 */
const ExperienceTab = ({ position, org }: IExperienceTab) => {
	return (
		<div className="exp-tab">
			<div className="exp-tab-position">{position}</div>
			<div className="exp-tab-org">{org}</div>
		</div>
	);
};

export default ExperienceTab;
