import { RecommendCard } from '.';
import socials from 'assets/socials.json';

/**
 * Assembles all components for Recommendations
 * @returns Testimonials Component
 */
const Recommendations = () => {
	return (
		<div className="centroid page-section under-section">
			<aside className="recommendation-cover section-cover">
				<div className="recommendations-list">
					{socials.recomendations.map((recomend, id) => (
						<RecommendCard
							key={`rec-${id}`}
							quote={recomend.quote}
							author={recomend.author}
							position={recomend.position}
						/>
					))}
				</div>
			</aside>
		</div>
	);
};

export default Recommendations;
