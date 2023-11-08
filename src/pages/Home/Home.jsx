import Banner from "../../components/Banner";
import Featured from "../../components/Featured";
import Hero from "../../components/Hero";
import PopularJobs from "../../components/PopularJobs";
import TabBasedCategory from "../../components/TabBasedCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularJobs></PopularJobs>
           <TabBasedCategory></TabBasedCategory>
           <Featured></Featured>
           <Hero></Hero>
        </div>
    );
};

export default Home;