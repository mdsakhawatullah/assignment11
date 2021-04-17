import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

const ServiceAdmin = () => {
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    fetch("https://polar-springs-72792.herokuapp.com/allServicesOrdered")
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, []);
  console.log(servicesList);
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div style={{ marginTop: 30 }} className=" col-md-10 p-4 pr-5 ml-auto">
        <h3 className="text-dark">Services List</h3>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th
                style={{ width: "5%" }}
                className="text-dark text-left"
                scope="col"
              >
                Sr No
              </th>

              <th style={{ width: "10%" }} className="text-dark" scope="col">
                Name
              </th>
              <th style={{ width: "15%" }} className="text-dark" scope="col">
                Email ID
              </th>
              <th style={{ width: "18%" }} className="text-dark" scope="col">
                Service
              </th>
              <th style={{ width: "40%" }} className="text-dark" scope="col">
                Project Details
              </th>
              <th style={{ width: "12%" }} className="text-dark" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {servicesList.map((srvclst, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{srvclst.name}</td>
                <td>{srvclst.email}</td>
                <td>{srvclst.orderedService}</td>
                <td>{srvclst.description}</td>
                <td>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Control className="btn-primary" as="select">
                        <option className="bg-success">Complet</option>
                        <option className="bg-warning">Pending</option>
                        <option className="bg-danger">On Going</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceAdmin;
