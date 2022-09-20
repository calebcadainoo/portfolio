import { ProjectCard } from '.';

/**
 * Assembles all components for the Project Section on Home pgae
 * @returns Projects Section
 */
const Projects = () => {
	let scrollXpos = 0;
	const scrollNav = (direction: string) => {
		const box = document.querySelector('.projects-list');
		if (direction === 'L') {
			if (box) {
				scrollXpos -= Number(box?.scrollWidth / 4);
				if (scrollXpos < 0) scrollXpos = 0;

				box.scroll({
					top: 0,
					left: scrollXpos,
					behavior: 'smooth',
				});
			}
			console.log('LEFT: ', box?.scrollWidth, scrollXpos);
		}

		if (direction === 'R') {
			if (box) {
				scrollXpos += Number(box?.scrollWidth / 4);
				if (scrollXpos >= box.scrollWidth / 2) scrollXpos = box.scrollWidth / 2;
				box.scroll({
					top: 0,
					left: scrollXpos,
					behavior: 'smooth',
				});
			}
			console.log('RIGHT: ', box?.scrollWidth, scrollXpos);
		}
	};

	return (
		<div className="centroid projects under-section page-section">
			<h2 className="h2-mid">Personal Projects</h2>

			<div className="projects-carousel-box">
				{/* @ts-ignore */}
				<div
					onClick={() => scrollNav('L')}
					className="btn-prev btn-car-nav"
				></div>
				<aside className="projects-list">
					<ProjectCard
						image={''}
						tag={'Ecommerce Product'}
						name={'Kinetic Mall'}
						uri={'https://kineticmall.web.app'}
					/>

					<ProjectCard
						image={''}
						tag={'Chemistry Product'}
						name={'Web Periodic Table'}
						uri={'https://webperiodictable.web.app'}
					/>

					<ProjectCard
						image={''}
						tag={'Product'}
						name={'URL Sharer'}
						uri={'https://calebcadainoo.web.app'}
					/>

					<ProjectCard
						image={''}
						tag={'Product'}
						name={'Kinetic Mall'}
						uri={'https://kineticmall.web.app'}
					/>

					<ProjectCard
						image={''}
						tag={'Product'}
						name={'Kinetic Mall'}
						uri={'https://kineticmall.web.app'}
					/>
				</aside>
				{/* @ts-ignore */}
				<div
					onClick={() => scrollNav('R')}
					className="btn-next btn-car-nav"
				></div>
			</div>
		</div>
	);
};

export default Projects;
