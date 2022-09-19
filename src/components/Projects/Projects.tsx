import { ProjectCard } from '.';

const Projects = () => {
	return (
		<div className="centroid projects under-section page-section">
			<h2 className="h2-mid">Personal Projects</h2>

			<div className="projects-carousel-box">
				<div className="btn-prev btn-car-nav"></div>
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
				<div className="btn-next btn-car-nav"></div>
			</div>
		</div>
	);
};

export default Projects;
