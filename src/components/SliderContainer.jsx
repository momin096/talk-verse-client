import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// lottie 
import Lottie from "lottie-react";
import slide1 from '../assets/Slide1.json';
import slide2 from '../assets/slide2.json'
import slide3 from '../assets/Slide3.json'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'swiper/css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SliderContainer = () => {
    return (<>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

            {/* SLide 1 */}
            <SwiperSlide >
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:px-12 lg:py-16 py-4 px-2 bg-gradient-to-r from-[#B7B1F2] to-[#E7E4FB]">
                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Learn Languages from Real People, Anytime.
                        </h1>
                        <p className="text-lg text-gray-700">
                            Connect with experienced tutors from around the world. Book personalized 1-on-1 lessons that fit your schedule.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">

                            <Link to="/become-tutor" className="border border-[#6C63FF] text-[#6C63FF] px-6 py-3 rounded-xl hover:bg-[#6C63FF] hover:text-white transition">
                            Find Tutors
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:mb-10">
                        <Lottie animationData={slide1} />
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide >
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between lg:px-12 lg:py-16 py-4 px-2 bg-gradient-to-r to-[#B7B1F2] from-[#E7E4FB]">
                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Why TalkVerse?
                        </h1>
                        <p className="text-lg text-gray-700">
                        Whether you're a beginner or brushing up your skills, our tutors customize lessons to fit your learning style and goals.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <Link to="/find-tutors" className="bg-[#6C63FF] text-white px-6 py-3 rounded-xl hover:bg-[#594FE2] transition">
                                Find Tutors
                            </Link>

                           
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className=" lg:mb-10 ">
                        <Lottie className='h-[500px] w-auto ' animationData={slide2} />
                    </div>
                </div>
            </SwiperSlide>

            {/*Slide 3  */}
            <SwiperSlide >
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:px-12 lg:py-16 py-4 px-2 bg-gradient-to-r from-[#B7B1F2] to-[#E7E4FB]">
                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Join a Global Language Learning Community
                        </h1>
                        <p className="text-lg text-gray-700">
                        Practice with native speakers, gain confidence, and make friends around the world. Language learning has never been this engaging.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">

                            <Link to="/find-tutors" className="border border-[#6C63FF] text-[#6C63FF] px-6 py-3 rounded-xl hover:bg-[#6C63FF] hover:text-white transition">
                            Find Tutors
                            </Link>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:mb-10">
                        <Lottie className='h-[500px] w-auto ' animationData={slide3} />
                    </div>
                </div>
            </SwiperSlide>
            

        </Swiper>
    </>
    );
};

export default SliderContainer;
