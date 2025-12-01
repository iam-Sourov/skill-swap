import React from 'react';
import SkillCards from './SkillCards';

const PopularSkills = ({skills}) => {
    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl text-white font-bold mb-8">Popular Skills</h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {skills.map((skills) => <SkillCards key={skills.skillId} skills={skills}></SkillCards>)}
                </div>
            </div>
        </section>
    );
};

export default PopularSkills;