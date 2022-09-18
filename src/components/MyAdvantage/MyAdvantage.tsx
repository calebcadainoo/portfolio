import { AdvantageCapsule } from '.';
import ReactIcon from 'assets/skills/react.png';
import JavaScriptIcon from 'assets/skills/js.png';
import TypeScriptIcon from 'assets/skills/typescript.png';
import HTMLIcon from 'assets/skills/html-5.png';
import CSSIcon from 'assets/skills/css-3.png';
import NodeJSIcon from 'assets/skills/nodejs.png';
import MongoDBIcon from 'assets/skills/mongodb.png';
import GraphQLIcon from 'assets/skills/graphql.png';
import RESTIcon from 'assets/skills/rest-api.png';
import TailwindIcon from 'assets/skills/tailwind-css.png';
import MaterialUIIcon from 'assets/skills/mui.svg';
import StyledCompIcon from 'assets/skills/styled-components.png';
import AntDesignIcon from 'assets/skills/ant-design.svg';
import GoogleAnalyticsIcon from 'assets/skills/google-analytics.svg';
import JQueryIcon from 'assets/skills/mui.svg';
import FirebaseIcon from 'assets/skills/firebase.png';
import GCPIcon from 'assets/skills/google-cloud-platform.png';
import AWSIcon from 'assets/skills/aws.png';
import GitIcon from 'assets/skills/git.png';
import HerokuIcon from 'assets/skills/heroku.png';
import GitHubActionsIcon from 'assets/skills/github.png';
import BitBucketIcon from 'assets/skills/bitbucket.png';
import ElectronJSIcon from 'assets/skills/electronjs.png';
import VBIcon from 'assets/skills/vb-net.png';
import PHPIcon from 'assets/skills/php.png';
import CSharpIcon from 'assets/skills/c-sharp.png';
import CPPIcon from 'assets/skills/c++.png';
import ReactTestingIcon from 'assets/skills/react-testing.png';
import CypressIcon from 'assets/skills/cypress.png';
import JestIcon from 'assets/skills/jest.png';
import YouTubeIcon from 'assets/youtube.png';
import DroneIcon from 'assets/skills/drone.png';
import GoogleIcon from 'assets/skills/google.png';
import GoogleAdsIcon from 'assets/skills/adwords.png';
import MSSuiteIcon from 'assets/skills/ms-suite.png';
// import Auth0Icon from 'assets/skills/auth0.svg';

/**
 * Assembles all components required for My Advantage section
 * @returns MyAdvantage Section
 */
const MyAdvantage = () => {
	return (
		<div className="centroid myadvantage page-section under-section">
			<h2 className="h2-mid">My Advantage</h2>
			<div className="quote-box">
				{`"A jack`} of all trades is a master of none, but oftentimes{' '}
				<b>better than a master of one</b>
				{`"`}. - Anonymous
			</div>

			<aside className="advantage-capsule-list">
				<AdvantageCapsule icon={HTMLIcon} years={'.'} text={'HTML5'} />
				<AdvantageCapsule
					icon={JavaScriptIcon}
					years={'.'}
					text={'JavaScript'}
				/>
				<AdvantageCapsule
					icon={ReactIcon}
					years={'.'}
					text={'React (Native)'}
				/>
				<AdvantageCapsule icon={CSSIcon} years={'.'} text={'CSS3'} />
				<AdvantageCapsule
					icon={TypeScriptIcon}
					years={'.'}
					text={'TypeScipt'}
				/>
				<AdvantageCapsule icon={NodeJSIcon} years={'.'} text={'NodeJS'} />
				<AdvantageCapsule icon={MongoDBIcon} years={'.'} text={'MongoDB'} />
				<AdvantageCapsule icon={GraphQLIcon} years={'.'} text={'GraphQL'} />
				<AdvantageCapsule icon={RESTIcon} years={'.'} text={'REST API'} />
				<AdvantageCapsule
					icon={TailwindIcon}
					years={'.'}
					text={'TailwindCSS'}
				/>
				<AdvantageCapsule
					icon={MaterialUIIcon}
					years={'.'}
					text={'Material UI'}
				/>
				<AdvantageCapsule
					icon={StyledCompIcon}
					years={'.'}
					text={'Styled Components'}
				/>
				<AdvantageCapsule
					icon={AntDesignIcon}
					years={'.'}
					text={'Ant Design'}
				/>
				<AdvantageCapsule
					icon={GoogleAnalyticsIcon}
					years={'.'}
					text={'Google Analytics'}
				/>
				<AdvantageCapsule icon={JQueryIcon} years={'.'} text={'jQuery'} />
				<AdvantageCapsule icon={FirebaseIcon} years={'.'} text={'Firebase'} />
				<AdvantageCapsule icon={GCPIcon} years={'.'} text={'GCP'} />
				<AdvantageCapsule icon={AWSIcon} years={'.'} text={'AWS(learning)'} />
				<AdvantageCapsule icon={GitIcon} years={'.'} text={'Git'} />
				<AdvantageCapsule icon={HerokuIcon} years={'.'} text={'Heroku'} />
				<AdvantageCapsule
					icon={GitHubActionsIcon}
					years={'.'}
					text={'GitHub Actions'}
				/>
				<AdvantageCapsule
					icon={BitBucketIcon}
					years={'.'}
					text={'BitBucket Pipelines'}
				/>
				<AdvantageCapsule
					icon={ElectronJSIcon}
					years={'.'}
					text={'ElectronJS'}
				/>
				<AdvantageCapsule icon={PHPIcon} years={'.'} text={'PHP'} />
				<AdvantageCapsule icon={VBIcon} years={'.'} text={'VB.NET'} />
				<AdvantageCapsule icon={CSharpIcon} years={'.'} text={'C#'} />
				<AdvantageCapsule icon={CPPIcon} years={'.'} text={'C++'} />
				<AdvantageCapsule
					icon={ReactTestingIcon}
					years={'.'}
					text={'React Testing Library'}
				/>
				<AdvantageCapsule icon={CypressIcon} years={'.'} text={'Cypress'} />
				<AdvantageCapsule icon={JestIcon} years={'.'} text={'Jest'} />
				<AdvantageCapsule icon={YouTubeIcon} years={'.'} text={'YouTube'} />
				<AdvantageCapsule icon={GoogleIcon} years={'.'} text={'Googling'} />
				<AdvantageCapsule icon={DroneIcon} years={'.'} text={'Drones'} />
				<AdvantageCapsule icon={GoogleAdsIcon} years={'.'} text={'Adwords'} />
				<AdvantageCapsule
					icon={MSSuiteIcon}
					years={'.'}
					text={'MicroSoft Suite'}
				/>
				{/* <AdvantageCapsule icon={Auth0Icon} years={'.'} text={'Auth0'} /> */}
			</aside>
		</div>
	);
};

export default MyAdvantage;
