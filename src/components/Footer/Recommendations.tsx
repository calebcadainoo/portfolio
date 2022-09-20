import { RecommendCard } from '.';
import socials from 'assets/socials.json';

/**
 * Assembles all components for Recommendations
 * @returns Testimonials Component
 */
const Recommendations = () => {
	return (
		<div className="centroid page-section under-section">
			<div className="recommendations-list">
				{socials.recomendations.map((recomend) => (
					<RecommendCard
						quote={recomend.quote}
						author={recomend.author}
						position={recomend.position}
					/>
				))}
			</div>
		</div>
	);
};

export default Recommendations;
