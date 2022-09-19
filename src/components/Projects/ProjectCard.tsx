interface IProjectCard {
	image: string;
	tag: string;
	name: string;
	uri: string;
}

/**
 * Used under the Personal Projects section
 * @param image - image path of project
 * @param tag - the tag of project category
 * @param name - name of the project
 * @param uri - the URL to navigate to the project
 * @example <ProjectCard
						image={''}
						tag={'Ecommerce Product'}
						name={'Kinetic Mall'}
						uri={'https://kineticmall.web.app'}
					/>
 * @returns Project Card Component
 */
const ProjectCard = ({ image, tag, name, uri }: IProjectCard) => {
	image =
		'https://images.pexels.com/photos/5689905/pexels-photo-5689905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
	return (
		<>
			<a href={uri}>
				<div className="project-card">
					<div className="project-card-img">
						<img src={image} alt={name} />
						{/* <iframe src={uri} title={name} frameBorder="0"></iframe> */}
					</div>
					<div className="project-card-tag">{tag}</div>
					<div className="project-card-name">{name}</div>
				</div>
			</a>
		</>
	);
};

export default ProjectCard;
