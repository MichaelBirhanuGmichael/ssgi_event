"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0f112e] tracking-wide uppercase">
          Contact Us
        </h1>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col  gap-10 mb-10">
        <div className="w-full justify-between space-x-6 space-y-6 flex md:flex-row flex-col">
          {/* Address */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-xl text-[#0f112e] mt-1" />
            <div>
              <p className="font-medium text-sm text-gray-600">Our Office</p>
              <p className="font-semibold text-black">
                Menilik II Ave, Addis Ababa
              </p>
              <div className="flex gap-3 mt-2 text-xl text-gray-600">
                <FaFacebookF />
                <FaInstagram />
                <FaTelegramPlane />
                <FaYoutube />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-xl text-[#0f112e] mt-1" />
            <div>
              <p className="font-medium text-sm text-gray-600">Call Us</p>
              <p className="font-semibold text-black">+251 9** *** ***</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-xl text-[#0f112e] mt-1" />
            <div>
              <p className="font-medium text-sm text-gray-600">Support</p>
              <p className="font-semibold text-black">support@SSGI.gov.et</p>
            </div>
          </div>
        </div>

        {/*  Form */}
        <div className="w-full flex flex-col md:flex-row gap-6 mt-4">
        {/* Map */}
        <div className="w-full h-120">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4789851701407!2d38.760385574827225!3d9.019994789130273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8585f0126257%3A0x65dd1dc0f4bc9ffd!2sSpace%20Science%20and%20Geospatial%20Institute!5e0!3m2!1sen!2set!4v1751447988734!5m2!1sen!2set"
              className="w-full h-full border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          {/* Form */}
          <div className="w-full bg-white p-6 shadow-sm">
            <h3 className="text-xl text-center font-semibold mb-4">Send Us A Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 focus:outline-none focus:border-[#9b6b50]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 focus:outline-none focus:border-[#9b6b50]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 focus:outline-none focus:border-[#9b6b50]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0f112e] text-white py-2 font-semibold hover:bg-[#0f112ed4] transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
