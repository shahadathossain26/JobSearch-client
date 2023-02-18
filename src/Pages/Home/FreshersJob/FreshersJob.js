import React, { useEffect, useState } from 'react';
import JobCards from '../JobCards/JobCards';
import { BsArrowRight } from "react-icons/bs";

const FreshersJob = () => {
    const [freshersJobs, setFreshersJobs] = useState([]);

    useEffect(() => {
        fetch("https://y-woad-six.vercel.app/freshersJobs")
            .then(res => res.json())
            .then(data => setFreshersJobs(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-black text-center'><span className='text-2xl lg:text-3xl'>See Out Latest</span> <br /> <span className='text-primary'>Freshers Jobs</span></h2>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-6 mx-10' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                {
                    freshersJobs.map(job => <JobCards
                        key={job._id}
                        job={job}
                    ></JobCards>)
                }
            </div>
            <div className='mt-8 text-center'>
                <button className="btn btn-primary bg-white text-primary hover:text-white text-[18px] border border-primary">See All Jobs <BsArrowRight className='ml-3 text-xl'></BsArrowRight></button>
            </div>
        </div>
    );
};

export default FreshersJob;