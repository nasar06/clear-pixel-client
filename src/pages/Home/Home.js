import React from 'react';
import Advertised from './Advertised/Advertised';
import Banner from './Banner';
import BestOffer from './BestOffer/BestOffer';
import Categories from './Categories/Categories';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertised></Advertised>
            <BestOffer></BestOffer>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;