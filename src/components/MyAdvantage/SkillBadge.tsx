import { IAdvantageCapsule } from './AdvantageCapsule';

/**
 * This is used to denote the technical skills
 * @param icon - the icon representation of experience
 * @param years - the years of experience to be shown inside the capsule
 * @param text - the text to be shown below the capsule
 * @returns Skill Badge Component
 */
const SkillBadge = ({ icon, years, text }: IAdvantageCapsule) => {
	return (
		<div className="skill-badge">
			<div className="skill-badge-icon">
				<img src={icon} alt={text} />
			</div>
			<div className="skill-badge-name">{text}</div>
		</div>
	);
};

export default SkillBadge;
