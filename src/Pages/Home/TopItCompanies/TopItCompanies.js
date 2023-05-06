import React, { useEffect, useState } from 'react';
import CompanyCards from '../Home/CompanyCards/CompanyCards';

const TopItCompanies = () => {
    const [bdCompanies, setBdCompanies] = useState([]);
    const [worldCompanies, setWorldCompanies] = useState([]);

    useEffect(() => {
        fetch("https://job-search-server.vercel.app/bangladeshCompanies")
            .then(res => res.json())
            .then(data => setBdCompanies(data))
    }, [])

    useEffect(() => {
        fetch("https://job-search-server.vercel.app/worldwideCompanies")
            .then(res => res.json())
            .then(data => setWorldCompanies(data))
    }, [])


    return (
        <div className='mt-16 mb-10'>
            <div className='text-center w-full'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-primary'>Top IT Companies</h2>
                <p className='mt-5 text-xl  text-center'>Here Are Some Top Bangladesh and Worldwide IT Companies to Look For Your Job</p>
            </div>
            <div className='mt-10'>
                <h3 className='text-xl md:text-2xl lg:text-3xl text-primary ml-5'>Top 3 Bangladesh Companies</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10'>
                    {
                        bdCompanies.map(companies => <CompanyCards
                            key={companies._id}
                            companies={companies}
                        ></CompanyCards>)
                    }
                </div>
            </div>
            <div className='mt-16'>
                <h3 className='text-xl md:text-2xl lg:text-3xl text-primary ml-5'>Top 3 WorldWide Companies</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10'>
                    {
                        worldCompanies.map(companies => <CompanyCards
                            key={companies._id}
                            companies={companies}
                        ></CompanyCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopItCompanies;