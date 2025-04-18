import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const MyTutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        fetchTutorials();
    }, [user?.email]);

    const fetchTutorials = async () => {
        try {
            const { data } = await axiosSecure.get(`/my-tutorials/${user.email}`);
            setTutorials(data);
        } catch (error) {
            toast.error(error.message)
        }
    };



    const handleDelete = async (id) => {
        try {
            const { data } = await axiosSecure.delete(`/delete-tutorial/${id}`);
            fetchTutorials();
            if (data.deletedCount) {
                toast.success("Delete Success")
            }
        } catch (err) {
            toast.error(err.message)
        }
    }

    const mordernDelete = id => {
        toast((t) => (
            <span className='flex gap-3 items-center'>
                <p>Are you <b>sure ?</b></p>
                <div className='flex gap-2 items-center'>
                    <button
                        className='text-white bg-red-600 py-2 px-4 rounded-md font-semibold '
                        onClick={() => {
                            handleDelete(id)
                            toast.dismiss(t.id)
                        }}
                    >Yes</button>
                    <button
                        className='text-white bg-green-500 py-2 px-4 rounded-md font-semibold '
                        onClick={() => toast.dismiss(t.id)}>
                        Cancel
                    </button>
                </div>
            </span>
        ));
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-[#6C63FF]">📚 My Tutorials</h2>
                <Link
                    to="/add-tutorials"
                    className="bg-[#6C63FF] text-white px-4 py-2 rounded hover:bg-[#584ff3] transition"
                >
                    Add Tutorial
                </Link>
            </div>

            {tutorials.length === 0 ? (
                <p className="text-base-100">You haven’t added any tutorials yet.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                    {tutorials.map((tutorial) => (
                        <div
                            key={tutorial._id}
                            className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition flex gap-4"
                        >
                            <img
                                src={tutorial?.photo}
                                alt={tutorial?.title}
                                className="w-32 h-32 object-cover rounded-md"
                            />

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold ">{tutorial?.title}</h3>
                                    <p className=" mt-2">
                                        {tutorial?.description?.slice(0, 100)}...
                                    </p>
                                    <p className="text-sm  mt-1">Language: {tutorial?.language}</p>
                                    <p className="text-sm ">Price: ${tutorial?.price}</p>
                                </div>

                                <div className="flex gap-2 mt-4">
                                    <Link
                                        to={`/edit-tutorial/${tutorial._id}`}
                                        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => mordernDelete(tutorial._id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyTutorials;
