import React, { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://polar-springs-72792.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" style={{ marginTop: 60 }}>
      <h1 className="text-center" style={{ fontWeight: 700 }}>
        Our Complete <span style={{ color: "#4341c8" }}>Solutions</span>{" "}
      </h1>
      <div className="row justify-content-around">
        {services.map((srvc) => (
          <ServiceCard key={srvc._id} service={srvc}>
            {srvc.name}
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;