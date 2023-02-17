import React from 'react';
import Banner from '../Banner/Banner';
import ExperiencedJob from '../ExperiencedJob/ExperiencedJob';
import FreshersJob from '../FreshersJob/FreshersJob';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FreshersJob></FreshersJob>
            <ExperiencedJob></ExperiencedJob>
        </div>
    );
};

export default Home;