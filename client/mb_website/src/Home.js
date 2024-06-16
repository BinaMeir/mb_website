import './Home.css';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import SlideShow from './SlideShow';
import RenovationSteps from './RenovationSteps';
import AboutSection from './AboutSection';

const Home = () => {
    return ( 
        <div className="home">
            <FirstSection />
            <SecondSection />
            <SlideShow />
            <RenovationSteps />
            <AboutSection />
        </div>

     );
}
 
export default Home;