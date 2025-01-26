import React, { useState } from 'react';  
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',      
    email: '',     
    subject: '',   
    message: ''    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;  
    setFormData({
      ...formData,  
      [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    alert('Message sent!');  
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>  
      <p>If you have any questions or want to get in touch, feel free to reach out!</p>  

      {/* Secțiunea pentru numărul de telefon */}
      

      {/* Formularul de contact */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label> 
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange} 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>  
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>  
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>  
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      <div className="contact-info">
        <p><strong>Phone:</strong> <a href="tel:+40751415312">+40 751 415 312</a></p>
        <p><strong>Email:</strong> <a href="mailto:albu_daniel2009@yahoo.com">albu_daniel2009@yahoo.com</a></p>
      </div>
    </section>
  );
}

export default Contact;
