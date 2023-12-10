import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function ContactPage() {
  return (
    <div className="contact-page container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center lead">Welcome to the contact page! If you have any questions or feedback, feel free to reach out to us.</p>
      
      <div className="row">
        <div className="contact-details col-md-6">
          <h2>Get in Touch</h2>
          <p>For general inquiries, you can reach us at:</p>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Fake Street, Springfield, USA</li>
          </ul>
        </div>

        <div className="contact-form col-md-6">
          <h2>Contact Form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" id="name" name="name" className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" className="form-control" placeholder="Your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea id="message" name="message" className="form-control" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
