"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function SellPhoneForm() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    variant: "",
    description: "",
    price: "",
    mobile: "",
  });

  const brands = ["Apple", "Samsung", "OnePlus", "Google", "Xiaomi", "Other"];
  const variants = ["64GB", "128GB", "256GB", "512GB", "Other"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert form data to JSON
    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData);

    // Send email using EmailJS
    emailjs
      .send(
        "service_1c9nt2p", // Replace with your EmailJS Service ID
        "template_yuyv2lw", // Replace with your EmailJS Template ID
        {
          brand: formData.brand,
          model: formData.model,
          variant: formData.variant,
          description: formData.description,
          price: formData.price,
          mobile: formData.mobile,
          jsonData: jsonData, // JSON data (optional)
        },
        "hX5ZguBU-HD83qd9E" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Form submitted successfully!");
          setFormData({ brand: "", model: "", variant: "", description: "", price: "", mobile: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error sending email. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 ml-36">Cash Mobile</h1>
      <h2 className="text-xl font-semibold mb-4">Sell Your Mobile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Mobile Brand */}
        <div>
          <label className="block font-medium">Mobile Brand</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Model */}
        <div>
          <label className="block font-medium">Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
            placeholder="Enter model name"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Variant */}
        <div>
          <label className="block font-medium">Variant</label>
          <select
            name="variant"
            value={formData.variant}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a variant</option>
            {variants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe the phone condition"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Expected Price */}
        <div>
          <label className="block font-medium">Expected Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Enter expected price"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-medium">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="Enter your mobile number"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-4 text-center"> Contact Us on Call or WhatsApp </div>
      <div className="mt-4 text-center">+91 7670836076</div>
    </div>
  );
}
