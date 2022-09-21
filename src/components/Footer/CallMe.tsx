import { BioTitle } from 'components/Header';
import UpRightIcon from 'assets/up-right-arrow.png';

const CallMe = () => {
	return (
		<div className="centroid call-me-section page-section under-section">
			<div className="call-me-circle">
				<div>
					<BioTitle text={'Describe your <br />project'} hasHTML />
					<div className="call-me-text">
						Call <br />
						Crosby <br />
						<img src={UpRightIcon} alt="call crosby" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallMe;
