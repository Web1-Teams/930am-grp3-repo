import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowNotification(true); 
    setTimeout(() => setShowNotification(false), 3000); 
  };

  return (
    <div>
      <img
        src="../../../../images/catdog.webp"
        alt="cat"
        className="contact-image"
      />
      <div className="form-container">
        {showNotification && (
          <div className={`notification ${showNotification ? 'show' : ''}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Done
          </div>
        )}
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full-name">Full Name:</label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />

          <label htmlFor="subject">Subject:</label>
          <select id="subject" name="subject" required>
            <option value="">Select the subject</option>
            <option value="technical">Technical Issue</option>
            <option value="account">Account Issue</option>
            <option value="billing">Billing Issue</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description">Problem Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe the issue in detail"
            rows="4"
            required
          ></textarea>

          <button className='but33' type="submit">Submit</button>
        </form>
        <p className="note">* All fields are required.</p>
      </div>
    </div>
  );
};

export default Contact;
