import React, { useState } from "react";
import Button from "react-bootstrap/Button";


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message,color } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      color: color.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div><label htmlFor="name">Contact form</label></div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>
      <div>
      
      <label htmlFor="color">Favorite color</label>
      <select>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option selected value="red">Red</option>
  <option value="black">Black</option>
  <option value="brown">Brown</option>
</select>
  
 </div>
 

   
      <div>
        <label htmlFor="animals">Animals</label>
        <Button variant="primary">Bear</Button>{' '}
  <Button variant="success">Tiger</Button>{' '}
  <Button variant="danger">Snake</Button> {' '}
  <Button variant="dark">Donkey</Button>{' '}
        {/* <input type="animals" id="animals" required /> */}
      </div>
      {/* <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" required />
      </div> */}
      
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;