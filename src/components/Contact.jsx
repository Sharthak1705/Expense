import React, { useState, useEffect } from 'react';
import Page from '../assets/home.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
  });

  const [success, setSuccess] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('contactFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem('contactFormData', JSON.stringify(updatedFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('Contact form data saved locally!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="flex items-center justify-center w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${Page})`, marginTop: 0 }}
      >
        <div className="flex items-center justify-between w-full p-10">
          <div className="w-1/2">
            <h1 className="mb-4 text-5xl font-extrabold text-white">
            Smart Expense Manager
            </h1>
          </div>
          <div className="w-full max-w-md p-8 rounded-lg shadow-md bg-custom-blue">
            <h2 className="mb-6 text-2xl font-bold text-center text-white">
              Get a Free Consultation
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <button type="submit" className="px-6 py-2 font-semibold text-blue-600 bg-white rounded-full">
                Submit
              </button>
            </form>
            {success && <p className="mt-2 text-green-500">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
