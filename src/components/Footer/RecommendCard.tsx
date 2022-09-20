interface IRecommendCard {
	quote: string;
	author: string;
	position: string;
}

const RecommendCard = ({ quote, author, position }: IRecommendCard) => {
	return (
		<div className="recommend-card">
			<p>{quote}</p>
			<div className="recommend-author">
				<div className="author">{author}</div>
				<div className="position">{position}</div>
			</div>
		</div>
	);
};

export default RecommendCard;
