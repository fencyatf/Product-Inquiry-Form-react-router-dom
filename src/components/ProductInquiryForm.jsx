import React, { useState, useEffect, useRef } from 'react';
import { Form, useActionData } from 'react-router-dom';

const ProductInquiryForm = () => {
  const [submittedData, setSubmittedData] = useState();
  const [formReset, setFormReset] = useState(false);
  const actionData = useActionData();
  const formRef = useRef(null);

  useEffect(() => {
    if (actionData) {
      setSubmittedData(actionData);
      if (formRef.current) {
        formRef.current.reset(); 
      }
    }
  }, [actionData]);


  const handleReset = () => {
    setFormReset(true);
    setSubmittedData(null);
  };


  return (
    <div className="container form-container">
    <div className="d-flex justify-content-center mt-4 mb-4 text-dark">
    <h2>PRODUCT INQUIRY FORM</h2>
  </div>

  <Form
    method="post"
    action="/"
    className="p-4"
    ref={formRef}
  >
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        Full Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        placeholder="Enter your name"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-control"
        placeholder="Enter your email"
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="number" className="form-label">
        Phone Number:
      </label>
      <input
        type="tel"
        name="number"
        id="number"
        className="form-control"
        placeholder="Enter your phone number"
        pattern="[0-9]{10}" 
        inputMode="numeric"
        title="Please enter a valid 10-digit phone number"
        required
      />

    </div>

    <div className="mb-3">
      <label htmlFor="message" className="form-label">
        Message:
      </label>
      <textarea
        name="message"
        id="message"
        className="form-control"
        rows="4"
        placeholder="Type your message"
        required
      ></textarea>
    </div>

    <div className="d-flex justify-content-center">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  </Form>

  {submittedData && (
    <div className="thank-you-message mt-4">
      <h4>Thank you for your inquiry!</h4>
      <p><strong>Name:</strong> {submittedData.name}</p>
      <p><strong>Email:</strong> {submittedData.email}</p>
      <p><strong>Phone Number:</strong> {submittedData.number}</p>
      <p><strong>Message:</strong> {submittedData.message}</p>
    </div>
  )}
</div>

  );
};

export default ProductInquiryForm;

export const productAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get('name'),
    email: data.get('email'),
    number: data.get('number'),
    message: data.get('message'),
  };

  return submission;
};
