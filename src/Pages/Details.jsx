import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import MainSpinner from '../Components/MainSpinner';

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
        <div className="card min-h-screen grid place-content-center pt-22 bg-white hover:shadow-xl transition rounded-2xl shadow-md p-6">

            {
                singleSkillData.map(skill => <div key={skill.skillId} className="flex-col items-center">
                    <div className='md:flex justify-center items-center gap-6 item-center'>
                        <img
                            src={skill.image}
                            alt=""
                            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
                        />
                        <div className=''>
                            <h1 className="text-4xl font-bold mt-4 mb-2">{skill.skillName}</h1>
                            <p className="text-blue-400 mb-4">{skill.description}</p>

                            <p className="text-gray-800 mb-1">
                                💰 <span className=" text-blue-600 font-semibold">${skill.price}</span>
                            </p>
                            <p className="text-yellow-500 mb-1">⭐ {skill.rating}</p>
                            <p className="text-white mb-1 flex items-center gap-2">
                                🧑‍🏫 <img
                                    src={skill.providerImage}
                                    alt={'providerName'}
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="font-medium">{skill.providerName}</span>
                            </p>
                            <p className="text-white ">📧 {skill.providerEmail}</p>
                            <p className="text-blue-400 mb-6">
                                Available Slots:{" "}
                                <span className="font-semibold text-white">{skill.slotsAvailable}</span>
                            </p>
                        </div>
                    </div>
                    <div className=" flex-1 mt-10">
                        <h1 className="text-4xl text-center font-bold mb-4">Book Session</h1>

                        <form onSubmit={handleSession} className="card p-4 rounded-xl shadow-inner space-y-3">
                            <h2 className="text-2xl font-semibold mb-2">Book Session</h2>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full p-2 border rounded-lg  " />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full p-2 border rounded-lg " />
                            <button
                                type="submit"
                                className="btn btn-primary w-full mt-2 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Details;
