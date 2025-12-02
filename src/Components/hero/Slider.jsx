import React, { useContext } from 'react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AuthContext } from '../../Context/AuthContext';


const Slider = ({ skills }) => {
    const { user } = useContext(AuthContext)
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-4">
            {user && (
                <div className="text-center mb-4 space-y-2">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white tracking-tight">
                        Hello, <span className="text-blue-600">{user.displayName}</span>!
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
                        Welcome to <span className="font-bold text-blue-600">SkillSwap</span> — Where skills meet opportunity.
                    </p>
                </div>
            )}
            <div className="relative shadow-2xl rounded-2xl overflow-hidden mt-12">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-[50vh] md:h-[65vh]">
                    {skills.map((slider) => (
                        <SwiperSlide key={slider.skillId}>
                            <div
                                className="w-full h-full bg-cover bg-center relative group"
                                style={{ backgroundImage: `url(${slider.image})` }}>
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white z-10">
                                    <h2 className="text-2xl md:text-4xl font-bold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {slider.skillName || "Master a New Skill"}
                                    </h2>
                                    <p className="text-gray-200 hidden md:block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                                        Explore category.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;