import React from 'react';

const HowItWork = () => {
    return (
        <section className="py-10 ">
            <div data-aos='fade-up' className="max-w-7xl mx-auto px-6 text-center ">
                <h2 className="text-4xl text-white font-bold mb-12">How It Works</h2>
                <div className="grid gap-10 md:grid-cols-3">
                    <div className="p-6 card rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition ease-in">
                        <div className="text-4xl mb-4 text-blue-600">🔍</div>
                        <h3 className="text-2xl text-white font-semibold mb-2">1. Browse Skills</h3>
                        <p className="text-gray-400">
                            Explore a wide range of skills and choose what fits your goals.
                        </p>
                    </div>
                    <div className="p-6 card rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition ease-in">
                        <div className="text-4xl mb-4 text-blue-600">💡</div>
                        <h3 className="text-2xl text-white font-semibold mb-2">2. Learn & Practice</h3>
                        <p className="text-gray-400">
                            Watch tutorials, complete exercises, and get hands-on experience.
                        </p>
                    </div>
                    <div className="p-6 card rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition ease-in">
                        <div className="text-4xl mb-4 text-blue-600">🚀</div>
                        <h3 className="text-2xl text-white font-semibold mb-2">3. Get Certified</h3>
                        <p className="text-gray-400">
                            Complete your learning journey and earn a verified certificate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;