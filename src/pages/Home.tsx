import 'css/Home.css';
import { Header } from 'components/Header';
import { NavBar } from 'components/Nav';
import { TabTitle } from 'utils/Functions';
import { MyAdvantage } from 'components/MyAdvantage';
import { EducationExperience } from 'components/Education';
import { Projects } from 'components/Projects';
import { CallMe, Recommendations } from 'components/Footer';

/**
 * Assembled components for Home Page
 * @returns Home Page of Portfolio
 */
const Home = () => {
	TabTitle("Crosby's Portfolio");
	return (
		<div>
			<NavBar />
			<Header />
			<MyAdvantage />
			<EducationExperience />
			<Projects />
			<Recommendations />
			<CallMe />
		</div>
	);
};

export default Home;
