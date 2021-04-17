import React from 'react';
import nokia from '../../../images/logos/nokia.png'
import apple from "../../../images/logos/apple.png";
import samsung from "../../../images/logos/samsung.png";
import oppo from "../../../images/logos/oppo.png";
import xiaomi from "../../../images/logos/xiaomi.png";
import { Link } from 'react-router-dom';
import './Brands.css';


const Brands = () => {
    return (
        <div style={{ marginTop: 60, marginBottom: 140 }} class="container">
        <div class="row">
          <div class="col">
            <Link>
              <img src={nokia} alt="" />
            </Link>
          </div>
          <div class="col">
            <Link>
              <img src={apple} alt="" />
            </Link>
          </div>
          <div class="col">
            <Link>
              <img src={samsung} alt="" />
            </Link>
          </div>
          <div class="col">
            <Link>
              <img src={oppo} alt="" />
            </Link>
          </div>
          <div class="col">
            <Link>
              <img src={xiaomi} alt="" />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Brands;