import 'css/Home.css';
import { Header } from 'components/Header';
import { NavBar } from 'components/Nav';
import { TabTitle } from 'utils/Functions';
import { MyAdvantage } from 'components/MyAdvantage';
import { EducationExperience } from 'components/Education';
import { Projects } from 'components/Projects';
import { CallMe, Footer, Recommendations } from 'components/Footer';
import { useEffect } from 'react';

/**
 * Assembled components for Home Page
 * @returns Home Page of Portfolio
 */
const Home = () => {
	TabTitle('Portfolio • Caleb Crosby Adainoo');
	useEffect(() => {
		const sectionCovers = document.querySelectorAll('.section-cover');
		sectionCovers.forEach((section) => {
			const fullHeight = Number(section.clientHeight);
			// @ts-ignore
			section.style.height = `${Number(fullHeight - 20)}px`;
		});
		console.log(sectionCovers);
	}, []);

	return (
		<div>
			<NavBar />
			<Header />
			<MyAdvantage />
			<EducationExperience />
			<Projects />
			<Recommendations />
			<CallMe />
			<Footer />
		</div>
	);
};

export default Home;
