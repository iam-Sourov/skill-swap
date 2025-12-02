import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();

    const skilldDetails = useLoaderData();
    const singleSkillData = skilldDetails.filter(skill => skill.skillId == parseInt(id));

    const handleSession = (e) => {
        e.preventDefault()
        const form = e.target;
        toast.success('Book Session Form Submitted')
        form.reset();
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center  items-start">
            {singleSkillData.map((skill) => (
                <div key={skill.skillId} className="max-w-6xl w-full rounded-3xl shadow-xl overflow-hidden mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-2 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
                            <div className="relative overflow-hidden rounded-2xl shadow-sm mb-8 group">
                                <img
                                    src={skill.image}
                                    alt={skill.skillName}
                                    className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition duration-500" />
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    ${skill.price}
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                {skill.skillName}
                            </h1>
                            <p className=" leading-relaxed mb-6 text-lg">
                                {skill.description}
                            </p>
                            <div className="flex flex-wrap gap-4 md:gap-6 border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-5 py-1.5 rounded-full">
                                    <img
                                        src={skill.providerImage}
                                        alt={skill.providerName}
                                        className="w-12 h-12 rounded-full  object-cover" />
                                    <div>
                                        <p className="font-bold ">{skill.providerName}</p>
                                        <p className="text-sm">{skill.providerEmail}</p>
                                    </div>
                                </div>
                                <div className=" flex items-center gap-1 bg-black/50 backdrop-blur-sm px-4 py-1 rounded-full">
                                    <div className="text-xs uppercase tracking-wide">Rating</div>
                                    <span className=" text-md">⭐</span>
                                    <div className="font-bold  text-lg">
                                        {skill.rating}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" p-6 md:p-10 flex flex-col justify-center">
                            <div className=" p-8 rounded-2xl shadow-lg border border-gray-100">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold">Book Session</h2>
                                    <p className=" text-sm mt-1">
                                        Fill out the form below to secure your spot.
                                    </p>
                                </div>
                                <div className="mb-6 inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1  text-green-500 rounded-lg text-sm font-medium">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    {skill.slotsAvailable} Slots Available
                                </div>
                                <form onSubmit={handleSession} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-2 outline-1 border rounded-field focus:ring-2 focus:ring-blue-500 focus:border-transparent  transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="you@example.com"
                                            required
                                            className="w-full px-4 py-2 outline-1 border rounded-field focus:ring-2 focus:ring-blue-500 focus:border-transparent  transition-all" />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-outline w-full  hover:bg-blue-600 hover:border-none text-white border-white">
                                        Confirm Booking
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Details;
