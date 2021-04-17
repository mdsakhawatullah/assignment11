import React from "react";

const ContactForm = () => {
  return (
    <div className="col-md-6 offset-md-2">
      <form>
        <div className="form-group">
          <input
            style={{ border: "none" }}
            placeholder="Your email address"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <textarea
            style={{ border: "none" }}
            placeholder="Your name / company's name"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <textarea
            style={{ height: 277, border: "none" }}
            placeholder="Your Message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;