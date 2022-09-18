import 'css/Home.css';
import { Header } from 'components/Header';
import { NavBar } from 'components/Nav';
import { TabTitle } from 'utils/Functions';
import { MyAdvantage } from 'components/MyAdvantage';
import { EducationExperience } from 'components/Education';

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
		</div>
	);
};

export default Home;
