"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

export default function SellPhoneForm() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    variant: "",
    description: "",
    price: "",
    mobile: "",
  });

  const brands = ["Apple", "Samsung", "OnePlus", "Google", "Xiaomi", "Realme", "Redmi", "Oppo", "Vivo", "Other"];
  const variants = ["64GB", "128GB", "256GB", "512GB", "Other"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert form data to JSON
    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData);

    // Construct the WhatsApp message
  const message = `Brand: ${formData.brand}%0AModel: ${formData.model}%0AVariant: ${formData.variant}%0ADescription: ${formData.description}%0APrice: ${formData.price}%0AMobile: ${formData.mobile}`;

  // WhatsApp link (replace YOUR_NUMBER with your actual number)
  const whatsappURL = `https://wa.me/7670836076?text=${message}`;

  // Open WhatsApp chat
  window.open(whatsappURL, "_blank");

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
    <>
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
    <div className="text-center text-black font-bold text-xl pt-12"> SELL YOUR OLD PHONE AND GET AN OPTIMUM PRICE</div>
    <div className="max-w-lg h-fit mx-auto p-6 mt-10 bg-pink-200 shadow-lg rounded-xl bg-opacity-60">
      <h1 className="text-2xl font-bold mb-4 ml-36 text-black">Cash Mobile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Mobile Brand */}
        <div>
          <label className="block font-medium text-black">Mobile Brand</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-black"
          >
            <option value="" className="text-black">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Model */}
        <div>
          <label className="block font-medium text-black">Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
            placeholder="Enter model name"
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* Variant */}
        <div>
          <label className="block font-medium text-black">Variant</label>
          <select
            name="variant"
            value={formData.variant}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-black"
          >
            <option value="" className="text-black">Select a variant</option>
            {variants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-black">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe the phone condition"
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* Expected Price */}
        <div>
          <label className="block font-medium text-black">Expected Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Enter expected price"
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-medium text-black">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="Enter your mobile number"
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800 font-bold"
        >
          Submit
        </button>
      </form>

      <div className="mt-4 text-center text-black font-bold"> Contact Us on Call or WhatsApp </div>
      <div className="mt-4 text-center text-black font-bold flex justify-center">
      <Image src="/phone.jpeg" className="h-8" alt="sell mobile" />
        <a href="tel:+917670836076" className="text-black hover:underline hover:text-blue-500 ml-2">
                  +91 7670836076
                </a></div>
    </div>
    </div>
    </>
  );
}