import React from 'react';
import Banner from '../Banner/Banner';
import ExperiencedJob from '../ExperiencedJob/ExperiencedJob';
import FreshersJob from '../FreshersJob/FreshersJob';
import TopItCompanies from '../TopItCompanies/TopItCompanies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FreshersJob></FreshersJob>
            <ExperiencedJob></ExperiencedJob>
            <TopItCompanies></TopItCompanies>
        </div>
    );
};

export default Home;