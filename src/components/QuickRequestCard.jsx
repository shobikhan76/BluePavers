import React, { useState } from "react";

const QuickRequestCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjkenrgq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send request. Please check your internet connection.");
    }
  };

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 py-8">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-6xl">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3"
          >
            {/* Title */}
            <h2 className="text-lg font-bold text-blue-600 text-center sm:text-left sm:ml-4">
              Send Quotation Request
            </h2>

            {/* Name */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 sm:ml-6">
              <label className="whitespace-nowrap font-medium">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="border rounded-lg p-2 focus:outline-none focus:ring w-full sm:w-48"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <label className="whitespace-nowrap font-medium">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="border rounded-lg p-2 focus:outline-none focus:ring w-full sm:w-40"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition whitespace-nowrap mt-2 sm:mt-0 sm:ml-4"
            >
              Send
            </button>
          </form>
        ) : (
          <div className="text-center text-green-700 font-semibold">
            <h2 className="text-xl mb-2">Quick Callback Request</h2>
            <p>Send Quotation Request</p>
            <p>✅ Thanks for contacting us! We will be in touch with you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickRequestCard;
