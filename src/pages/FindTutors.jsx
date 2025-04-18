import { useEffect, useState } from "react";
import { axiosSecure } from "../hooks/useAxiosSecure";
import TutorCard from "../components/TutorCard";
import { useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import toast from "react-hot-toast";

const FindTutors = () => {
    const [tutors, setTutors] = useState([])
    const location = useLocation();
    const selectedLanguage = location.state?.selectedLanguage || null;
    const [search, setSearch] = useState(null);

    useEffect(() => {
        const fetchTutors = async () => {
            try {
                let url = '/tutors';
                if (selectedLanguage) {
                    url += `?language=${selectedLanguage}`;
                }
                else if (search) {
                    url += `?search=${search}`
                }

                const { data } = await axiosSecure.get(url);
                setTutors(data);
            } catch (error) {
                toast.error(error.message)
            }
        };

        fetchTutors();
    }, [selectedLanguage, search]);




    return (
        <div className="container mx-auto min-h-screen mt-5 p-1">
            <h2 className="text-5xl font-medium text-center mb-5 text-base-100">{selectedLanguage ? selectedLanguage + ' Tutors' : "Find Your Tutor"}</h2>
            <div className={`flex justify-center mb-8 ${selectedLanguage ? 'hidden' : ''}`}>
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search for a tutor..."
                        className="w-full pl-12 pr-4 py-3 rounded-2xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-800 text-2xl">
                        <IoSearch />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)
                }
            </div>
        </div>
    );
};

export default FindTutors;