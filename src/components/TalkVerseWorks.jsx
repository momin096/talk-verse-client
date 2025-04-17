import React from 'react';
import { GoStar } from 'react-icons/go';
import { LuBookOpen, LuMessageCircle } from 'react-icons/lu';

const TalkVerseWorks = () => {
    return (
        < section className='container mx-auto my-20 '>
            <h2 className="text-4xl text-center font-bold mb-6 text-base-100">How TalkVerse Works</h2>
            <div className="grid lg:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white  py-5">
                    <LuBookOpen className="mx-auto text-indigo-500 w-15 h-15 mb-2" />
                    <h4 className="font-semibold text-2xl mb-2 ">Choose a Language</h4>
                    <p className="text-sm text-gray-500">Explore from a wide range of languages to learn.</p>
                </div>
                <div className="p-6 bg-white ">
                    <LuMessageCircle className="mx-auto text-indigo-500 w-15 h-15 mb-2" />
                    <h4 className="font-semibold  text-2xl mb-2">Connect with Tutors</h4>
                    <p className="text-sm text-gray-500">Book your favorite tutor for live sessions.</p>
                </div>
                <div className="p-6 bg-white ">
                    <GoStar className="mx-auto text-indigo-500 w-15 h-15 mb-2" />
                    <h4 className="font-semibold text-2xl mb-2">Learn & Improve</h4>
                    <p className="text-sm text-gray-500">Get real feedback and grow your skills.</p>
                </div>
            </div>
        </section >
    );
};

export default TalkVerseWorks;