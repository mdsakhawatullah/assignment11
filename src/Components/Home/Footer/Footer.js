import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer" className="row footer-home">
        <div className="col-md-3 offset-md-1">
          <h1 style={{ fontWeight: 700, color: "#2D2D2D" }}>
            If you have amy Question <br /> Email us.We have highly professional developer.
          </h1>
          <p style={{ marginTop: 20 }}>
            
              We are ready to provide your complete solution.We Make
              best quality design,software and many more
            
          </p>
        </div>
        <div className="col-md-8">
          <ContactForm></ContactForm>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#6cd4a9", paddingBottom: 20 }}
        className="text-center"
      >
        <footer>@copywrite software solution bd,2021</footer>
      </div>
    </>
  );
};

export default Footer;