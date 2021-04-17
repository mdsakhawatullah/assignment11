import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = (props) => {
  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const { image, name, description, _id } = props.service;
  return (
    <div
      style={{ paddingRight: 50, paddingLeft: 50 }}
      className="col-md-4 mx-auto"
    >
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/serviceRegister/" + _id}
      >
        <animated.div
          class="animated-card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: prop.xys.interpolate(trans), marginTop: 40 }}
        >
          <div
            style={{ margin: 30, padding: 20 }}
            className="row card text-center service-card"
          >
            {/* <img style={{ width: 74 }} className="mx-auto" src={image} alt="" /> */}

            <img style={{ width: 74 }} className="mx-auto" src={`data:image/png;base64,${image.img}`}/>
              
              
              
            
            <div className=" card-body">
              <h5 style={{ fontWeight: 800 }} className="card-title">
                {name}
              </h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </animated.div>
      </Link>
    </div>
  );
};

export default ServiceCard;