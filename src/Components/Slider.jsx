import React, { useContext } from 'react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AuthContext } from '../Context/AuthContext';

const Slider = ({ skills }) => {
    const { user } = useContext(AuthContext)

    return (
        <section className="w-full md:mt-10 ">
            {user && <h1 className='text-4xl text-center mb-6'>Hello! <span className='text-blue-600'>{user.displayName}</span> Welcome To <span className='font-bold text-blue-600'>SkillSwap</span></h1>}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} loop className="w-full h-[60vh] rounded-xl">
                {
                    skills.map(slider => <SwiperSlide key={slider.skillId}>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    `url(${slider.image})`
                            }}>
                        </div>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Slider;