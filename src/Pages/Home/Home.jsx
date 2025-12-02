import Slider from "../../Components/hero/Slider";
import PopularSkills from "../../Components/hero/PopularSkills";
import TopProviders from "../../Components/hero/TopProviders";
import HowItWork from "../../Components/hero/HowItWork";
import LearnSection from "../../Components/hero/LearnSection";
import { useLoaderData} from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import  MainSpinner  from "../../Components/spinner/Spinner";



const Home = () => {
const {loading } =useContext(AuthContext);

    const skills = useLoaderData();
    const topProvider = skills.filter(top => top.rating > 4.5);

    if(loading){
        return <MainSpinner></MainSpinner>
    }


    return (
        <div className="pt-16">
            <Slider skills={skills}></Slider>
            <PopularSkills skills={skills}></PopularSkills>
            <TopProviders topProvider={topProvider}></TopProviders>
            <HowItWork></HowItWork>
            <LearnSection></LearnSection>
        </div>
    );
};

export default Home;