// import { useState } from "react";
import React from "react";
import pictures from "../images/houseHold/aloe_jojoba_conditioner_pd_zoomedimage_1000_X_1000_1616616156316.jpg";
import "../css/Contact.css";
// import myStyle from "./Style.module.css";

function Contact() {
  // const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(inputs);
  // };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pictures})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
        {/* <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Enter your age:
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
          <label >
            Enter your message:
            <input rows="6"
              type="text"
              name="comment"
              value={inputs.comment || ""}
              onChange={handleChange}
              required
            />
          </label>
          <input type="submit" />
        </form> */}
      </div>
    </div>
  );
}
export default Contact;
