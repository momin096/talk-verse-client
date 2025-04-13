import LanguageCategory from "../components/LanguageCategory";
import SliderContainer from "../components/SliderContainer";
import Stats from "../components/Stats";
import TalkVerseWorks from "../components/TalkVerseWorks";
import TopTutors from "../components/TopTutors";



const Home = () => {

    return (
        <div className="">
            <SliderContainer />

            <Stats />

            <LanguageCategory />

            <TopTutors />

            <TalkVerseWorks />
        </div>
    );
};

export default Home;