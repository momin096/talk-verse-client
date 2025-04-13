import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const categories = [
    { title: "English tutors", teachers: "33,602", icon: "🕰️" },
    { title: "Spanish tutors", teachers: "10,054", icon: "🎶" },
    { title: "French tutors", teachers: "3,712", icon: "🗼" },
    { title: "German tutors", teachers: "1,517", icon: "🏛️" },
    { title: "Korean tutors", teachers: "2,542", icon: "🍝" },
    { title: "Chinese tutors", teachers: "5,253", icon: "🏯" },
    { title: "Arabic tutors", teachers: "3,651", icon: "🕌" },
    { title: "Japanese tutors", teachers: "2,902", icon: "⛩️" },
    { title: "Portuguese tutors", teachers: "1,636", icon: "🌉" },
];



const LanguageCategory = () => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/find-tutors");
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl text-center font-bold mb-6">Explore Languages</h2>
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
                                <h2 className="text-2xl font-semibold mb-2">{cat.title}</h2>
                                <p className="text-sm text-gray-500">{cat.teachers} teachers</p>
                            </div>
                        </div>
                        <IoIosArrowForward className="text-gray-600 text-3xl " />
                    </div>
                ))}
            </div>
        </div>
    );

};

export default LanguageCategory;