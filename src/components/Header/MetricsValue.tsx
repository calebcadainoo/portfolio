import { IBioTitle } from './BioTitle';

/**
 * 72px Title Usually Meant for Numbers Only
 * @param text - the text to be shown
 * @returns Metrics Value Component
 */
const MetricsValue = ({ text }: IBioTitle) => {
	return <div className="metrics-value">{text}</div>;
};

export default MetricsValue;
