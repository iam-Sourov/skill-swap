import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllSkillCard from '../allSkills/allSkillCard/allSkillCard';

const AllSkills = () => {
  const skills = useLoaderData();
  const [sortOrder, setSortOrder] = useState('');
  console.log(sortOrder);
  const sortedSkills = [...skills].sort((a, b) => {
    if (sortOrder === 'asc') {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortOrder === 'desc') {

      return parseFloat(b.price) - parseFloat(a.price);
    }
    return 0;
  });
  return (
    <section id='Skills' className=" py-16 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-white font-bold mt-10 mb-2">All Skills</h2>
        <div className="flex justify-end dropdown dropdown-end mb-6">
          <option tabIndex={0} role="button" className="btn m-1">Sort</option>
          <div tabIndex="-1" className="dropdown-content menu text-black bg-gray-100 rounded-box z-1 top-12 w-52 p-2 shadow-sm" >
            <select
              className="select select-bordered w-full max-w-xs bg-gray-100 text-black"
              onChange={(e) => setSortOrder(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>Sort by Price</option>
              <option value="desc">Price: High to Low</option>
              <option value="asc">Price: Low to High</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {sortedSkills.map((skills) => <AllSkillCard key={skills.skillId} skills={skills}></AllSkillCard>)}
        </div>
      </div>

    </section>
  );
};

export default AllSkills;