// src/components/Contact.js
import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // Simple email regex for validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Invalid email address";
      }
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form Submitted:", form);
      setSubmitted(true);
      // Reset form
      setForm({ name: "", email: "", message: "" });
      // Handle form submission logic here (e.g., send to backend)
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {submitted && (
        <p className="success-message">
          Thank you for your message! We'll get back to you soon.
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
          </label>
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
          </label>
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label>
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            ></textarea>
          </label>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
