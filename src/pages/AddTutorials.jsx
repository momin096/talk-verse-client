import useAuth from "../hooks/useAuth";
import { axiosSecure } from "../hooks/useAxiosSecure";


const AddTutorials = () => {
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const language = form.language.value;
        const review = form.review.value;
        const description = form.description.value

        const formData = { name, email, photo, language, price, review, description };

        try {
            // Make a post request
            const { data } = await axiosSecure.post('/add-tutorials', formData, { withCredentials: true });
            console.log(data);
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
                    Add a New Tutorial
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {/* Name  */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                value={user?.displayName}
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
                                value={user?.email}
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
                                defaultValue=""
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
                                placeholder="e.g. 25"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
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
                                value="0"
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
                            Submit Tutorial
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddTutorials;