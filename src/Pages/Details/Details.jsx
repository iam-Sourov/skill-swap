import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const skilldDetails = useLoaderData();

    const skill = skilldDetails.find(skill => skill.skillId == parseInt(id));

    const handleSession = (e) => {
        e.preventDefault();
        const form = e.target;
        toast.success('Book Session Form Submitted');
        form.reset();
    }
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-start ">
            <div className="max-w-6xl w-full bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-2 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-700">
                        <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8 group h-[350px]">
                            <img
                                src={skill.image}
                                alt={skill.skillName}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-white font-bold shadow-lg border border-white/10">
                                ${skill.price}
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                            {skill.skillName}
                        </h1>
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            {skill.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-6 border-t border-gray-700 pt-8">
                            <div className="flex items-center gap-4">
                                <img
                                    src={skill.providerImage}
                                    alt={skill.providerName}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30" />
                                <div>
                                    <p className="font-semibold text-white text-lg">{skill.providerName}</p>
                                    <p className="text-sm text-gray-400">{skill.providerEmail}</p>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-10 bg-gray-700"></div>
                            <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg border border-gray-600">
                                <span className="text-yellow-400 text-lg">⭐</span>
                                <span className="font-bold text-white text-lg">{skill.rating}</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wide ml-1">Rating</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 md:p-10 bg-gray-800/50">
                        <div className="bg-gray-900/50 p-8 rounded-2xl shadow-inner border border-gray-700/50">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-white">Book a Session</h2>
                                <p className="text-gray-400 text-sm mt-2">
                                    Secure your spot with {skill.providerName} today.
                                </p>
                            </div>
                            <div className="mb-8 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full text-green-400 text-xs font-bold uppercase tracking-wide">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                {skill.slotsAvailable || "Limited"} Slots Available
                            </div>
                            <form onSubmit={handleSession} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                                </div>
                                <button
                                    type="submit"
                                    className=" btn btn-outline w-full py-3.5 px-6 rounded-xl  bg-gray-700/50 border border-gray-500 hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 ">
                                    Confirm Booking
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;