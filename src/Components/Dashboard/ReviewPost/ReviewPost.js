import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const ReviewPost = () => {
  const { register, handleSubmit, errors } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  const onSubmit = (values) => {
    const reviewDetails = {
      name: values.name,
      job: values.job,
      image: values.image,
      description: values.description,
    };

    fetch("https://polar-springs-72792.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Review Posted Successfully");
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
            <h1 className="mt-5 text-center">Post A Review</h1>
          </center>
        </div>
        <form className="col-md-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              name="name"
              placeholder="Your name"
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
            <label htmlFor="image">Image</label>

            <input
              name="image"
              placeholder="Your Image"
              defaultValue={loggedInUser.image}
              className={`form-control`}
              ref={register({ required: "Image is required" })}
            />
          </div>
          <ErrorMessage
            className="invalid-feedback"
            name="fullName"
            as="div"
            errors={errors}
          />
          <div className="form-group">
            <label htmlFor="job">Company Name</label>

            <input
              name="job"
              placeholder="Company's name, Designation"
              className={`form-control`}
              ref={register({ required: "Company name is required" })}
            />
          </div>
          <ErrorMessage
            className="invalid-feedback"
            name="fullName"
            as="div"
            errors={errors}
          />

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              style={{ height: 150 }}
              name="description"
              placeholder="Project Details"
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

          <button className="btn btn-dark text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPost;
