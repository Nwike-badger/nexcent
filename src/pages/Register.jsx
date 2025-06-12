import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // form validation upcoming
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" required className="w-full border px-4 py-2 rounded" />
              <input type="email" placeholder="Email Address" required className="w-full border px-4 py-2 rounded" />
              <input type="password" placeholder="Password" required className="w-full border px-4 py-2 rounded" />
              <button type="submit" className="w-full bg-[#4CAF4F] text-white py-2 rounded hover:bg-green-600">
                Register
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#4CAF4F] mb-4">Registration Successful!</h2>
            <p className="text-gray-700 mb-6">
              Congratulations! A confirmation email has been sent to your inbox. Please check your email to complete your registration.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#4CAF4F] text-white px-6 py-2 rounded hover:bg-green-600 transition"
            >
              Return Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
