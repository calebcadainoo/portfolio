interface IInfoGapValue {
	children: JSX.Element | JSX.Element[];
}

/**
 * Component with 45px gap between title and value
 * and 90px margin bottom
 * @param children - JSX elements to be parsed into component
 * @returns InfoGapValue Component
 */
const InfoGapValue = ({ children }: IInfoGapValue) => {
	return <div className="info-gap-value">{children}</div>;
};

export default InfoGapValue;
