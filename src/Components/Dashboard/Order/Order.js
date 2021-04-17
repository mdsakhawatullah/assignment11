import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Payment from "./Payment";
const Order = () => {
  let { serviceId } = useParams();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [services, setServices] = useState({});
  const [file, setFile] = useState(null);
  const stripePromise = loadStripe('pk_test_51Ien3OFY8rDITW0Q7Sp2mY3jTqVSyxroDku59urHvsGuKq9u9za7ViVNkLjNwk90ca5wwOgV3cjLmVH8K9YX6bmK00oNbyztb8');
  useEffect(() => {
    fetch("https://polar-springs-72792.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        const service = data.find(
          (srvc) => srvc._id.toString() === serviceId.toString()
        );
        setServices(service);
      });
  }, []);

  const onSubmit = (values) => {
    const orderDetails = {
      ...loggedInUser,
      name: values.fullName,
      email: values.email,
      orderedService: values.orderedService,
      description: values.description,
      price: values.price,
      file: values.file,
      orderTime: new Date(),
    };
    fetch("https://polar-springs-72792.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Order Placed. Thank You.");
        }
      });
  };

  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };

  return (
    <div style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="col-md-10 p-4 pr-5 ml-auto">
        <div className="row mb-5 justify-content-md-center">
          <center>
            <h1 className="mt-5 text-center">Order A Service</h1>
          </center>
        </div>
        <form className="col-md-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="fullName">Name</label>

            <input
              name="fullName"
              placeholder="Your name / company's name"
              defaultValue={loggedInUser.name}
              className={`form-control`}
              ref={register({ required: "Name is required" })}
            />
          </div>
          <ErrorMessage
            className="invalid-feedback"
            name="fullName"
            as="div"
            errors={errors}
          />
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              placeholder="Your email address"
              defaultValue={loggedInUser.email}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address format",
                },
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="email"
              as="div"
              errors={errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="orderedService">Service Name</label>
            <input
              name="orderedService"
              placeholder="Service Name"
              defaultValue={services.name}
              className={`form-control`}
              ref={register({ required: "Selected Activity is required" })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="selectedActivity"
              as="div"
              errors={errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              style={{ height: 150 }}
              name="description"
              placeholder="Please Write Your Criteria"
              className={`form-control`}
              ref={register({ required: "Description is required" })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="description"
              as="div"
              errors={errors}
            />
          </div>
          {/*Price & File Upload */}

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  name="price"
                  placeholder="$150-250"
                  className={`form-control`}
                  ref={register({ required: "Price is required" })}
                />
                 
                <ErrorMessage
                  className="invalid-feedback"
                  name="description"
                  as="div"
                  errors={errors}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="fileUpload">Pay With Bank Card</label>
                <Elements stripe={stripePromise}>
      <Payment />
          </Elements>
                <ErrorMessage
                  className="invalid-feedback"
                  name="description"
                  as="div"
                  errors={errors}
                />
                
              </div>
            </div>
          </div>
          <button className="btn btn-dark text-white" type="submit">
            Send
          </button>
          
        </form>
        
      </div>
    </div>
  );
};

export default Order;
