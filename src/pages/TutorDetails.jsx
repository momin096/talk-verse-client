import React, { useEffect, useState } from 'react';
import { axiosSecure } from '../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const TutorDetails = () => {

    const { id } = useParams();
    const [tutor, setTutor] = useState(null)
    const { user } = useAuth();


    useEffect(() => {

        const fetchTutor = async () => {
            try {
                const { data } = await axiosSecure.get(`/tutor/${id}`)
                setTutor(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchTutor();
    }, [id]);

    const { _id, name, photo, language, description, price, review, email } = tutor || {};

    const handleBook = async () => {

        const bookedData = {
            tutorId: _id,
            photo,
            language,
            price,
            tutorEmail: email,
            userEmail: user.email,
        }
        console.log(bookedData);

        try {
            // Make a post request
            const { data } = await axiosSecure.post('/add-book', bookedData);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='min-h-screen  mt-20'>
            <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl  grid grid-cols-1 md:grid-cols-3 gap-6 border border-gray-200">
       
                <div className="col-span-1 flex justify-center">
                    <img
                        src={photo}
                        alt={name}
                        className="w-52 h-52 rounded-xl object-cover shadow-md"
                    />
                </div>

                <div className="col-span-2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                        <p className="text-gray-500 mt-1">Language: <span className="font-semibold">{language}</span></p>
                        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
                        <p className="mt-3 text-sm text-gray-500">Reviews: {review}</p>
                    </div>

                    <div className="flex justify-between items-end mt-6">
                        <div>
                            <p className="text-green-600 font-medium">New</p>
                            <p className="text-2xl font-bold">${price}</p>
                        </div>
                        <div className="flex items-center gap-3">

                            <button
                                onClick={handleBook}
                                className="bg-[#928cff] hover:bg-[#7c75ff] cursor-pointer text-white font-semibold px-6 py-2 rounded-lg transition">
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;