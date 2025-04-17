import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { axiosSecure } from "../hooks/useAxiosSecure";

const categories = [
    { title: "English", teachers: "33,602", icon: "🕰️" },
    { title: "Spanish", teachers: "10,054", icon: "🎶" },
    { title: "French", teachers: "3,712", icon: "🗼" },
    { title: "German", teachers: "1,517", icon: "🏛️" },
    { title: "Korean", teachers: "2,542", icon: "🍝" },
    { title: "Chinese", teachers: "5,253", icon: "🏯" },
    { title: "Arabic", teachers: "3,651", icon: "🕌" },
    { title: "Japanese", teachers: "2,902", icon: "⛩️" },
    { title: "Portuguese", teachers: "1,636", icon: "🌉" },
];



const LanguageCategory = () => {

    const navigate = useNavigate();

    const handleCardClick = (title) => {
        navigate("/find-tutors", { state: { selectedLanguage: title } });
    };


    return (
        <div className="bg-base">
            <div className="container mx-auto">
                <h2 className="text-4xl text-center font-bold mb-6 text-base-100">Explore Languages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 ">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(cat.title)}
                            className="flex items-center justify-between p-6 bg-white  rounded-sm border border-gray-300 cursor-pointer hover:border-purple-900 hover:bg-purple-50 transition duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-5xl">{cat.icon}</span>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">{cat.title} tutors</h2>
                                    <p className="text-sm text-gray-800">{cat.teachers} teachers</p>
                                </div>
                            </div>
                            <IoIosArrowForward className="text-gray-600 text-3xl " />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default LanguageCategory;