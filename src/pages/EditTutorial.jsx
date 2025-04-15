import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { axiosSecure } from '../hooks/useAxiosSecure';
import Loading from '../components/Loading';

const EditTutorial = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tutorial, setTutorial] = useState(null);

    useEffect(() => {
        const fetchTutorial = async () => {
            try {
                const { data } = await axiosSecure.get(`/tutor/${id}`);
                setTutorial(data);
            } catch (error) {
                console.error("Failed to fetch tutorial:", error);
            }
        };
        fetchTutorial();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedTutorial = {
            name: form.name.value,
            language: form.language.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            photo: form.photo.value
        };

        try {
            await axiosSecure.put(`/update-tutorial/${id}`, updatedTutorial);
            navigate('/my-tutorials');
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    if (!tutorial) return <Loading />

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-[#6C63FF]">✏️ Edit Tutorial</h2>

            <form onSubmit={handleUpdate}>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Name  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={tutorial?.name}
                            disabled
                            className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2"
                        />
                    </div>

                    {/* Email  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={tutorial?.email}
                            disabled
                            className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tutorial Image URL
                        </label>
                        <input
                            name="photo"
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            defaultValue={tutorial?.photo}
                        />
                    </div>

                    {/* Language */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Language
                        </label>
                        <select
                            name="language"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white"
                            defaultValue={tutorial?.language}
                        >
                            <option value="" disabled hidden>Select a language</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Portuguese">Portuguese</option>
                            <option value="Korean">Korean</option>

                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price (USD)
                        </label>
                        <input
                            name="price"
                            type="number"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            defaultValue={tutorial?.price}
                        />
                    </div>

                    {/* Review (readonly 0) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Review
                        </label>
                        <input
                            name="review"
                            type="number"
                            value={tutorial?.review}
                            disabled
                            className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2"
                        />
                    </div>
                    {/* Description */}
                    <div className="lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            defaultValue={tutorial?.description}
                            name="description"
                            rows="5"
                            placeholder="Brief description of the tutorial..."
                            className="w-full border border-gray-300 rounded-xl px-4 py-2"
                        ></textarea>
                    </div>

                </div>


                {/* Submit Button */}
                <div className="text-center mt-5">
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-semibold transition"
                    >
                        Update Tutorial
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditTutorial;
