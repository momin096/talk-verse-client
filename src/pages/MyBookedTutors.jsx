import { useEffect, useState } from 'react';
import { axiosSecure } from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const MyBookedTutors = () => {
    const [booked, setBooked] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchBooked = async () => {
            try {
                const { data } = await axiosSecure.get(`/my-booked-tutors/${user?.email}`);
                setBooked(data);
                console.log(data);
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            }
        };

        fetchBooked();
    }, [user?.email]);

    const handleReview = async (tutorId) => {
        try {
            const { data } = await axiosSecure.patch(`/update-review/${tutorId}`);
            console.log(data);
            if (data.modifiedCount > 0) {
                console.log(data);
            }
        } catch (error) {
            console.error('Review update failed:', error);
        }
    };


    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
                <h2 className="text-3xl font-bold mb-6 text-[#6C63FF]">🌟 My Booked Tutors</h2>

                {booked.length === 0 ? (
                    <p className="">No tutors booked yet.</p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {booked.map(item => (
                            <div key={item._id} className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition flex gap-4">
                                <img
                                    src={item.photo}
                                    alt={item.name}
                                    className="w-28 h-28 object-cover rounded-md"
                                />
                                <div className="flex-1 flex flex-col justify-between">
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-sm text-base-100">Language: {item.language}</p>
                                    <p className="text-sm text-base-100 mb-2">Price: ${item.price}</p>

                                    <div>
                                        <button
                                            onClick={() => handleReview(item.tutorId)}
                                            className="bg-violet-400 hover:bg-violet-600 text-white px-4 py-1 rounded "
                                        >
                                            Review
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookedTutors;
