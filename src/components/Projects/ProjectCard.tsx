interface IProjectCard {
	image: string;
	tag: string;
	name: string;
	uri: string;
}

const ProjectCard = ({ image, tag, name, uri }: IProjectCard) => {
	return (
		<div className="project-card">
			<div className="project-card-img">
				<img src={image} alt={name} />
				{/* <iframe src={uri} title={name} frameBorder="0"></iframe> */}
			</div>
			<div className="project-card-tag">{tag}</div>
			<div className="project-card-name">{name}</div>
		</div>
	);
};

export default ProjectCard;
