interface IAdvantageCapsule {
	icon: string;
	years: string;
	text: string;
}

/**
 * This is used to denote the technical skills
 * @param icon - the icon representation of experience
 * @param years - the years of experience to be shown inside the capsule
 * @param text - the text to be shown below the capsule
 * @returns Advantage Capsule Component
 */
const AdvantageCapsule = ({ icon, years, text }: IAdvantageCapsule) => {
	return (
		<div className="advantage-capsule">
			<div className="advantage-capsule-tab">
				<img src={icon} alt={text} />
				<div className="advantage-capsule-tab-text">{years}</div>
			</div>
			<div className="advantage-capsule-text">{text}</div>
		</div>
	);
};

export default AdvantageCapsule;
