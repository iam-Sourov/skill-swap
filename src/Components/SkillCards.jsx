import React from 'react';
import { Link } from 'react-router';

const SkillCards = ({ skills }) => {
    const { skillId, image, skillName, rating, price } = skills;
    return (
        <div
            data-aos="zoom-in-up"
            className="card group bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={skillName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">⭐</span>
                    <span className="text-white text-xs font-bold">{rating}</span>
                </div>
            </div>
            <div className="p-5 flex flex-col grow">
                <h3 className="text-xl text-white font-bold mb-1 line-clamp-1" title={skillName}>
                    {skillName}
                </h3>
                <div className="mb-4">
                    <p className="text-gray-400 text-xs uppercase tracking-wide">Starting From</p>
                    <p className="text-2xl font-bold text-blue-400"> ${price}</p>
                </div>

                <div className="mt-auto">
                    <Link
                        to={`/details/${skillId}`}
                        className="block w-full text-center py-3 rounded-lg bg-gray-700 text-white font-semibold hover:bg-blue-600 transition-colors duration-300">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SkillCards;