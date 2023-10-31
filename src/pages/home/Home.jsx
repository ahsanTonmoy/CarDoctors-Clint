import About from "./about/About";
import Banner from "./bannar/Banner";
import Services from "./services/Services";

const Home = () => {
    return (
        <div className="px-4 md:px-20 py-4 space-y-6">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;