import React from 'react';

const LearnSection = () => {
    const cards = [
        {
            id: 1,
            title: "Skill Marketplace",
            desc: "Browse a diverse catalog of skills and knowledge areas, from cooking and coding to photography and foreign languages. Find what piques your interest.",
            icon: "💻",
        },
        {
            id: 2,
            title: "Network",
            desc: "Connect with people who share your passion for learning and teaching. Propose skill swaps, schedule sessions, and get ready to trade knowledge.",
            icon: "📡",
        },
        {
            id: 3,
            title: "SkillSwap",
            desc: "Is all about the joy of learning and sharing. No matter your skill level, you can be a valuable contributor and learner in this vibrant community.",
            icon: "🤝",
        },
    ];
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
                    Learn <span className="text-blue-600">Something New</span> For Free!
                </h2>
                <p className="text-gray-500 mb-12">
                    Get a new friend that will manage to help you achieve your goal!
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div data-aos='zoom-in'
                            key={card.id}
                            className={`rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 p-8 border ${idx === 1 ? "scale-105 shadow-2xl" : ""
                                }`}
                        >
                            <div className="text-5xl mb-4 text-teal-600">{card.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                {card.title}
                            </h3>
                            <p className="text-gray-500 mb-6 text-sm">{card.desc}</p>
                            <button className="text-secondary font-medium cursor-pointer hover:text-blue-600 flex items-center gap-1 justify-center">
                                Learn More <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnSection;