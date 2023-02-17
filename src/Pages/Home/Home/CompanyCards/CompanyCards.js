import React from 'react';

const CompanyCards = ({ companies }) => {
    const { company, logo } = companies
    return (
        <div className="card bg-base-100 shadow-xl border border-primary-700 mt-5">
            <div className="card-body text-center">
                <img className='w-[100px] mx-auto' src={logo} alt="" />
                <h4 className='text-xl font-bold'>{company}</h4>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CompanyCards;