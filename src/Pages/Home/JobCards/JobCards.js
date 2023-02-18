import React from 'react';
import { FaIndustry, FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const JobCards = ({ job }) => {
    const { company, location, logo, position, job_type, job_location } = job;

    return (
        <div className="card border border-primary-700 mt-10 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex items-center'>
                    <img className='w-[60px] md:w-[80px] lg:w-[100px]' src={logo} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-xl'>{position}</h3>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <FaIndustry></FaIndustry>
                                <h3 className='text-[12px] lg:text-[18px] ml-3'>{company}</h3>
                            </div>
                            <div className='flex items-center ml-0 md:ml-7 lg:ml-10'>
                                <FaLocationArrow></FaLocationArrow>
                                <h3 className='text-[12px] lg:text-[18px] ml-3'>{location}</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-evenly items-center'>
                    <h3 className='border border-primary px-3 py-1 rounded-full font-semibold text-primary bg-cyan-100 text-[12px] md:text-[14px] lg:text-[16px]'>{job_type}</h3>
                    <h3 className='border border-primary px-3 py-1 rounded-full font-semibold text-primary bg-cyan-100 text-[12px] md:text-[14px] lg:text-[16px]'>{job_location}</h3>
                    <div className="card-actions justify-end">
                        <Link to='/signin'><button className="btn btn-primary text-white">Apply Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCards;