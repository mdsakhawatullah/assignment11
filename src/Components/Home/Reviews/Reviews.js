import React, { useEffect, useState } from 'react';

import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {
    
    const[reviews,setReviews]= useState([]);

    useEffect(()=>{
        fetch('https://polar-springs-72792.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
      },[]);
      

    return (
         <section className="reviews my-5 py-5">
           <div className="container">
               <div className="section-header">
                   
                   <h1 className="text-center" style={{ fontWeight: 700 }}>Feedback From Our <span style={{ color: "#7AB259" }}>Customer</span>
      </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviews.map(review => <ReviewCard review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Reviews;