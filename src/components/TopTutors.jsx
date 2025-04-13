import { GoStarFill } from "react-icons/go";



const topTutors = [
    { name: "John Doe", language: "English", rating: 4.9, photo: 'https://i.ibb.co.com/k25Brv5k/man.png' },
    { name: "Maria Garcia", language: "Spanish", rating: 4.8, photo: 'https://i.ibb.co.com/QvjyXyGb/woman.png' },
    { name: "Liu Wei", language: "Chinese", rating: 4.7, photo: 'https://i.ibb.co.com/k25Brv5k/man.png' },
];
const TopTutors = () => {
    return (
        <section className="container mx-auto my-20">
            <h2 className="text-4xl font-bold mb-7 text-center ">Top Rated Tutors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topTutors.map((tutor, i) => (
                    <div
                        key={i}
                        className="p-6 bg-white rounded-xl shadow hover:shadow-lg hover:border hover:border-blue-900 transition duration-300 flex justify-between items-center hover:scale-105"
                    >

                        <div>
                            <h3 className="text-lg font-semibold">{tutor.name}</h3>
                            <p className="text-gray-600">{tutor.language}</p>
                            <p className="flex items-center text-yellow-500 mt-2">
                                <GoStarFill className="w-4 h-4 mr-1" />
                                {tutor.rating}
                            </p>
                        </div>
                        <img className="w-20 " src={tutor.photo} alt="" />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default TopTutors;