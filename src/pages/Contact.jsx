import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // VALIDATION
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      emailjs
        .sendForm(
          "Name:",
          "Email:",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          () => {
            setStatus("✅ Message sent successfully!");
            setLoading(false);
            setFormData({ name: "", email: "", message: "" });
          },
          () => {
            setStatus("❌ Failed to send message");
            setLoading(false);
          }
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#020617] to-[#0f172a] px-6">

      <div className="w-full max-w-xl backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-10 shadow-xl">

        {/* TITLE */}
        <h2 className="text-3xl text-cyan-400 mb-8 font-semibold text-center">
          {"<Contact Me />"}
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          {/* NAME */}
          <div className="relative">
            <span className="absolute left-3 top-3 text-slate-400">👤</span>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="peer w-full pl-10 pt-5 pb-2 bg-transparent border border-slate-600 rounded-lg text-white focus:border-cyan-400 outline-none"
              placeholder=" "
            />

            <label className="absolute left-10 top-2 text-sm text-slate-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
              Name
            </label>

            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="relative">
            <span className="absolute left-3 top-3 text-slate-400">📧</span>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full pl-10 pt-5 pb-2 bg-transparent border border-slate-600 rounded-lg text-white focus:border-cyan-400 outline-none"
              placeholder=" "
            />

            <label className="absolute left-10 top-2 text-sm text-slate-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
              Email
            </label>

            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <span className="absolute left-3 top-3 text-slate-400">💬</span>

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="peer w-full pl-10 pt-5 pb-2 bg-transparent border border-slate-600 rounded-lg text-white focus:border-cyan-400 outline-none"
              placeholder=" "
            ></textarea>

            <label className="absolute left-10 top-2 text-sm text-slate-400 transition-all">
              Message
            </label>

            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              loading
                ? "bg-slate-600 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 hover:shadow-lg"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p className="text-center text-slate-300 mt-4">{status}</p>
          )}

        </form>
      </div>
    </div>
  );
}

export default Contact;
