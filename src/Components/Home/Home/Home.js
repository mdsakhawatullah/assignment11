import React from 'react';
import Brands from '../Brands/Brands';
import FeaturedWork from '../FeaturedWork/FeaturedWork';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brands></Brands>
            <Services></Services>
            <FeaturedWork></FeaturedWork>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;