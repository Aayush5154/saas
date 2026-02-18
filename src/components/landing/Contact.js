"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ email: "", name: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    setForm({ email: "", name: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="relative flex items-center justify-center order-2 lg:order-1">
            <div className="absolute -top-2 sm:-top-4 left-4 sm:left-8 md:left-4 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 z-10">
              <Image src="/assets/Ellipse1.png" alt="" fill className="object-contain" />
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 z-10">
              <Image src="/assets/Ellipse2.png" alt="" fill className="object-contain" />
            </div>

            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/assets/earth.png"
                alt="Globe"
                fill
                className="object-contain"
              />
            </div>
          </div>


          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 text-center lg:text-left">
              Get In Touch
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-md mb-6 sm:mb-8 mx-auto lg:mx-0 text-center lg:text-left">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem it was
              designed for in the most efficient way possible.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="input-field"
            />

            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="input-field"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="input-field resize-none"
            />

            <button
              type="submit"
              className="self-start inline-flex items-center px-7 py-3 rounded-full
                         text-sm font-semibold text-white bg-accent-pink
                         hover:bg-accent-pink/90 transition-all duration-200
                         shadow-lg shadow-accent-pink/25"
            >
              Get In Touch
            </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
