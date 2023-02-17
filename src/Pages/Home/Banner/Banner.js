import React from 'react';
import banner from '../../../images/portrait-cheerful-young-man-holding-laptop-computer.jpg'

const Banner = () => {
    return (
        <div className='relative mb-16'>
            <div className='home-banner'>
                <img className='w-full h-1/2' src={banner} alt="" />
            </div>

            <div className='absolute top-[30px] md:top-[80px] lg:top-1/4 left-10 md:left-16 lg:left-24'>
                <h1 className='text-[30px] md:text-[50px] lg:text-[70px] font-bold text-black'>Find The Best Job <br /> <span className='text-primary'>For Youself</span></h1>
            </div>

            <div className='absolute top-[120px] md:top-[220px] lg:top-1/2 left-10 md:left-16 lg:left-24 w-1/2'>
                <p className='text-black text-[15px] md:text-[24px] lg:text-[30px]'>Over hundreds of companies and thousands of jobs waiting for you

                </p>
            </div>

            <div className='absolute top-[120px] md:top-[250px] lg:top-[500px] left-10 md:left-16 lg:left-24 mt-20'>
                <button className="btn btn-primary text-[12px] md:text-[15px] lg:text-xl text-white">Find Jobs</button>

            </div>
        </div>
    );
};

export default Banner;