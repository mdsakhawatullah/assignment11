import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const AddAdmin = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    const adminDetails = {
      email: values.email,
    };

    fetch("https://polar-springs-72792.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("New Admin Added Successfully");
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
            <h1 className="mt-5 text-center">Make New Admin</h1>
          </center>
        </div>
        <form className="col-md-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="Your email"
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
          <button className="btn btn-success text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;