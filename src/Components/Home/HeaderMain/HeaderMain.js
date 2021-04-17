import React from 'react';
import Frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px',}}className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{fontWeight: '700px'}}>Wr Are Ready <br/>
                    To Provide <br/>
                    Complete Solution</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit cumque distinctio. Corrupti, distinctio animi.</p>
                    <button type="button" class="btn btn-dark">Hire Us</button>
            </div>

           <div className="col-md-6">
               <img src={Frame} alt="" className="img-fluid hm"/>
           </div>

        </main>
    );
};

export default HeaderMain;