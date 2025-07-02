"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    eventName: "",
    location: "",
    date: "",
    description: "",
    secondDescription: "",
    images: [],
  });

  const [sponsors, setSponsors] = useState([""]);
  const [guests, setGuests] = useState([""]);
  const [schedules, setSchedules] = useState([""]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleListChange = (setter, list, idx, value) => {
    const copy = [...list];
    copy[idx] = value;
    setter(copy);
  };

  const addListItem = (setter, list) => setter([...list, ""]);

  const handleFileChange = (e) => {
    setForm({ ...form, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...form, sponsors, guests, schedules });
  };

  return (
    <div className="min-h-screen bg-white flex justify-center px-4 py-12">
      <div className="w-full max-w-4xl border rounded-xl p-8 shadow-md">
        <p className="text-sm text-pink-500 font-medium mb-1">Yay, Another one</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Host new event
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Event Name & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Event Name</label>
              <input
                name="eventName"
                type="text"
                value={form.eventName}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 bg-indigo-50"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <input
                name="location"
                type="text"
                value={form.location}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 bg-indigo-50"
                required
              />
            </div>
          </div>

          {/* Date & Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 bg-indigo-50"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Images</label>
              <input
                name="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full border rounded-md px-4 py-2 bg-indigo-50 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-200"
              />
            </div>
          </div>

          {/* Sponsors */}
          <div>
            <label className="block font-medium mb-2">Sponsors</label>
            {sponsors.map((val, idx) => (
              <input
                key={`sponsor-${idx}`}
                type="text"
                placeholder={`Sponsor ${idx + 1}`}
                value={val}
                onChange={(e) => handleListChange(setSponsors, sponsors, idx, e.target.value)}
                className="w-full mb-2 border rounded-md px-4 py-2 bg-indigo-50"
              />
            ))}
            <button
              type="button"
              onClick={() => addListItem(setSponsors, sponsors)}
              className="text-indigo-600 font-semibold"
            >
              + Add sponsor
            </button>
          </div>

          {/* Guests */}
          <div>
            <label className="block font-medium mb-2">Guests</label>
            {guests.map((val, idx) => (
              <input
                key={`guest-${idx}`}
                type="text"
                placeholder={`Guest ${idx + 1}`}
                value={val}
                onChange={(e) => handleListChange(setGuests, guests, idx, e.target.value)}
                className="w-full mb-2 border rounded-md px-4 py-2 bg-indigo-50"
              />
            ))}
            <button
              type="button"
              onClick={() => addListItem(setGuests, guests)}
              className="text-indigo-600 font-semibold"
            >
              + Add guest
            </button>
          </div>

          {/* Schedules */}
          <div>
            <label className="block font-medium mb-2">Schedules</label>
            {schedules.map((val, idx) => (
              <input
                key={`schedule-${idx}`}
                type="text"
                placeholder={`Schedule ${idx + 1}`}
                value={val}
                onChange={(e) => handleListChange(setSchedules, schedules, idx, e.target.value)}
                className="w-full mb-2 border rounded-md px-4 py-2 bg-indigo-50"
              />
            ))}
            <button
              type="button"
              onClick={() => addListItem(setSchedules, schedules)}
              className="text-indigo-600 font-semibold"
            >
              + Add schedule
            </button>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Event Description</label>
            <textarea
              name="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 bg-indigo-50 resize-none"
            />
          </div>

          {/* Second Description */}
          <div>
            <label className="block mb-1 font-medium">Additional Event Description</label>
            <textarea
              name="secondDescription"
              rows="4"
              value={form.secondDescription}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 bg-indigo-50 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0f112e] to-orange-400 text-white font-semibold px-6 py-2 rounded-md"
            >
              Submit &gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
