import React, { useState } from "react";
import axios from "axios";
import { base_api_uri } from "../assets/constants";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${base_api_uri}/email`, { email: email });
    console.log(res.data);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:w-full">
        <h2 className="text-2xl font-semibold mb-4">
          Never miss a match again!
        </h2>
        <p className="text-gray-600 mb-6">
          Enter your email to receive updates on live matches and more.
        </p>
        <form className="flex flex-col items-center space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            required
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSubscription;
