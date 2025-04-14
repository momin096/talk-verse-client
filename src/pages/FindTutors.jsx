import { useEffect, useState } from "react";
import { axiosSecure } from "../hooks/useAxiosSecure";
import TutorCard from "../components/TutorCard";

const FindTutors = () => {
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        const fetchAllTutors = async () => {
            const { data } = await axiosSecure.get('/tutors')
            setTutors(data)
        }

        fetchAllTutors();
    }, [])

    console.log(tutors);


    return (
        <div className="container mx-auto min-h-screen mt-5 p-1">
            <h2 className="text-5xl font-medium text-center mb-5 text-violet-950">Find Your Tutor</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)
                }
            </div>
        </div>
    );
};

export default FindTutors;