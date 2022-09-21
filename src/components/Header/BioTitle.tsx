export interface IBioTitle {
	text: string;
	alignRight?: boolean;
	hasHTML?: boolean;
}

/**
 * 14px Upppercased Title
 * @param text - the text to be shown
 * @returns Bio Title Component
 */
const BioTitle = ({ text, alignRight, hasHTML }: IBioTitle) => {
	return hasHTML ? (
		<div
			className={`bio-title${alignRight ? ' text-right' : ''}`}
			dangerouslySetInnerHTML={{ __html: text }}
		/>
	) : (
		<div className={`bio-title ${alignRight && 'text-right'}`}>{text}</div>
	);
};

export default BioTitle;
