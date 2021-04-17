import React from 'react';
import FeaturedWorkCard from '../FeaturedWorkCard/FeaturedWorkCard';

const FeaturedWork = () => {
    return (
        <div  id="portfolio"
        style={{
          height: 725,
          backgroundColor: "#111430",
          paddingTop: 40,
          marginTop: 80,
        }}>
            <h1 className="text-center text-white">
        Some of <span style={{ color: "#7AB259" }}>Our Developement</span>
      </h1>
      <FeaturedWorkCard></FeaturedWorkCard>
        </div>
    );
};

export default FeaturedWork;