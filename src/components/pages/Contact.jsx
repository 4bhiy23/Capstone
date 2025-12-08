import { useState } from "react";
import React from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB_3_FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 py-10 bg-linear-to-br from-[#FDFBF8] via-[#F6EBD5] to-[#F2E8C9] text-[#1C2A3A]">
      
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl w-full max-w-xl p-6 sm:p-8">
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gold text-center">
          Get In Touch With Us
        </h1>

        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center gap-6 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="rounded-3xl border border-[#E5DCC5] px-5 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="rounded-3xl border border-[#E5DCC5] px-5 py-3"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="rounded-3xl border border-[#E5DCC5] px-5 py-3"
          ></textarea>

          <button
            type="submit"
            className="rounded-2xl bg-gold px-6 py-3 w-full mx-auto"
          >
            Submit Form
          </button>
        </form>

        {result && (
          <p className="text-center mt-4 font-medium">{result}</p>
        )}
      </div>
    </div>
  );
}
