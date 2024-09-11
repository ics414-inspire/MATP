import React from 'react';
import { Meteor } from 'meteor/meteor';

const ContactUs = () => {
  // Place the handleSubmit function inside the component
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    // Call Meteor method to send the email
    Meteor.call('contact.sendEmail', { name, email, subject, message }, (error) => {
      if (error) {
        alert(`Error: ${error.reason}`);
      } else {
        alert('Message sent successfully!');
      }
    });
  };

  return (
    <div className="container my-5">
      <h2>Contact Us</h2>
      <p className="lead">We look forward to hearing from you.</p>
      <p>
        For a candid and confidential conversation, please reach out to us at your convenience, per the contact details
        listed below. Alternatively, you can complete the contact form, and a member of our team will get back to you in
        a timely fashion.
      </p>
      <div className="row">
        <div className="col-md-6">
          <p><strong>(808) 536-0066</strong></p>
          <p><a href="mailto:ContactUs@spirehi.com">ContactUs@spirehi.com</a></p>
          <h5>Headquarters</h5>
          <p>700 Bishop Street, Suite 2001<br />Honolulu, Hawaiʻi 96813</p>
          <h5>New York Office</h5>
          <p>Port 100, 350 East Avenue<br />Rochester, New York 14604</p>
        </div>
        <div className="col-md-6">
          {/* Attach handleSubmit to the form */}
          <form onSubmit={handleSubmit}>
            <h4>Mahalo!</h4>
            <div className="mb-3">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Your name" />
            </div>
            <div className="mb-3">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Your email" />
            </div>
            <div className="mb-3">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" placeholder="Your subject" />
            </div>
            <div className="mb-3">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your message" />
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
