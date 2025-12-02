import React from 'react';

const TopProviders = ({ topProvider }) => {
    return (
        <section className="py-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Header Section */}
                <h2 className="text-4xl text-white font-bold mb-12 tracking-wide">
                    Top Rated Providers
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
                    {topProvider.map((provider) => (
                        <div
                            key={provider.skillId}
                        
                            className="group bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition- ease-in-out duration-400 hover:-translate-y-2 border border-gray-700 ">
                            <div className="relative mb-4">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-blue-500 transition-colors duration-300">
                                    <img
                                        src={provider.providerImage}
                                        alt={provider.providerName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                                {provider.providerName}
                            </h3>
                            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                                {provider.skill}
                            </p>
                            <div className="inline-flex items-center px-3 py-1 bg-gray-700 rounded-full">
                                <span className="text-yellow-400 mr-1 text-sm">⭐</span>
                                <span className="text-white text-sm font-bold">{provider.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopProviders;