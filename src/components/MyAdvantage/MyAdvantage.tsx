import { AdvantageCapsule } from '.';
import ReactIcon from 'assets/skills/react.png';

/**
 * Assembles all components required for My Advantage section
 * @returns MyAdvantage Section
 */
const MyAdvantage = () => {
	return (
		<div className="centroid myadvantage page-section under-section">
			<h2 className="h2-mid">My Advantage</h2>

			<aside className="advantage-capsule-list">
				<AdvantageCapsule icon={ReactIcon} years={'4'} text={'React'} />
			</aside>
		</div>
	);
};

export default MyAdvantage;
