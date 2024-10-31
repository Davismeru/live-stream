// BuyMeACoffee.js
import React, { useState } from "react";

const BuyMeACoffee = () => {
  const till_no = import.meta.env.VITE_TILL_NO;
  const [amount, setAmount] = useState(0);
  const handleDonate = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    // PayPal business email or merchant ID
    const paypalEmail = import.meta.env.VITE_PAYPAL;

    // Construct PayPal donation URL
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${paypalEmail}&currency_code=USD&amount=${amount}`;

    // Redirect user to PayPal
    window.open(paypalUrl, "_blank");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">☕️</h1>
      <p className="text-center text-gray-700 max-w-md mb-8">
        Your support helps keep this streaming platform free from{" "}
        <span className="">annoying ads</span> and keeps me motivated to keep it
        running. Any amount is appreciated!
      </p>

      {/* PayPal Section */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-8">
        <img src="/logos/paypal.png" className="w-32 mb-5" />
        <form>
          <label className="block mb-4 text-gray,-700">
            Enter Amount:
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mt-1"
              placeholder="Enter amount in USD"
              min="1"
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <button
            onClick={(e) => handleDonate(e)}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mb-5"
          >
            Confirm
          </button>
        </form>
      </div>

      {/* mpesa section */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-8">
        <section>
          <img src="/logos/mpesa.png" className="w-32" />
          <p className="text-xl text-gray-400 font-bold">
            <span className="font-bold text-green-500">Till number: </span>
            {till_no}
          </p>
        </section>
      </div>
    </div>
  );
};

export default BuyMeACoffee;
