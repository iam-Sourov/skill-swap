import Slider from "../Components/Slider";
import PopularSkills from "../Components/PopularSkills";
import TopProviders from "../Components/TopProviders";
import HowItWork from "../Components/HowItWork";
import LearnSection from "../Components/LearnSection";
import { useLoaderData} from "react-router";
// import { useContext } from "react";
// import MainSpinner from "../Components/MainSpinner";
// import { AuthContext } from "../Context/AuthContext";


const Home = () => {
    // const { loading } = useContext(AuthContext)

    const skills = useLoaderData();
    const topProvider = skills.filter(top => top.rating > 4.5);

    // if(loading){
    //     return <MainSpinner></MainSpinner>
    // }


    return (
        <div className=" pt-20">
            <Slider skills={skills}></Slider>
            <PopularSkills skills={skills}></PopularSkills>
            <TopProviders topProvider={topProvider}></TopProviders>
            <HowItWork></HowItWork>
            <LearnSection></LearnSection>
        </div>
    );
};

export default Home;