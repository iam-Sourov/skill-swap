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
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        Learn Something New For Free!
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Get a new friend that will manage to help you achieve your goal!
                        Experience our premium content designed for your growth.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={card.id}
                            data-aos="zoom-in"
                            data-aos-delay={idx * 100}
                            className="group relative p-6 rounded-2xl border border-gray-700 bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-750">
                            <div className="text-5xl mb-6 w-fit">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 mb-8 w-[300px] text-sm leading-relaxed">
                                {card.desc}
                            </p>
                            <button className="text-white font-medium cursor-pointer group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnSection;