import { CiHeart } from "react-icons/ci";


const TutorCard = ({ tutor }) => {

    const { name, photo, language, price, review, description } = tutor || {};

    return (
        <div className="border border-gray-200  rounded-lg p-4 flex gap-4 justify-between items-start shadow-sm max-w-3xl">

            <img
                src={photo}
                alt={name}
                className="w-32 h-32 object-cover rounded-md"
            />

            <div className="flex-1">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-sm text-gray-600 mt-1">Language: <span className="font-bold">{language}</span></p>
                <p className="text-sm text-gray-700 mt-2">
                    {description.substring(0, 100)}...
                </p>
                <p>Reviews: {review}</p>

                <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
                    Book trial lesson
                </button>
            </div>

            <div className="">
                <p className="text-green-600 font-medium">New</p>
                <p className="text-xl font-bold mt-1">${price}</p>
                <CiHeart className="text-gray-600 mt-3 cursor-pointer text-4xl" />
            </div>
        </div>
    );
};

export default TutorCard;