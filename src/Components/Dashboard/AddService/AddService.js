import React, { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';

    const AddService = () => {
        const [info, setInfo] = useState({});
        const [file, setFile] = useState(null);
      
        const handleBlur = (e) => {
          const newInfo = { ...info };
          newInfo[e.target.name] = e.target.value;
          setInfo(newInfo);
        };
      
        const handleFileChange = (e) => {
          const newFile = e.target.files[0];
          setFile(newFile);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          const formData = new FormData();
      
          formData.append("file", file);
          formData.append("name", info.name);
          formData.append("description", info.description);

          fetch('https://polar-springs-72792.herokuapp.com/addService', {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("New Service Added Successfully");
      })
      .catch((error) => {
        console.error(error);
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
              <h1 className="mt-5 text-center">Add Services</h1>
            </center>
          </div>
  
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Service Title</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="description"
                placeholder="Enter Description"
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="file">Upload Icon</label>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control"
                placeholder="Upload Image"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
      

    );
};

export default AddService;