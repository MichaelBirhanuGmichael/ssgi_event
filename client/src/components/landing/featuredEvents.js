import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const events = [
  {
    title: 'Digital thinkers meetup',
    date: '29 Jan',
    location: 'Grand Chapiteau',
    image: '/images/sampleOne.jpg',
    buttonStyle: 'bg-[#0f112e] text-white hover:bg-gray-500 hover:text-black',
  },
  {
    title: 'Web design conference 2023',
    date: '29 Jan',
    location: 'Grand Chapiteau',
    image: '/images/sampleTwo.jpg',
    buttonStyle: 'bg-[#0f112e] text-white hover:bg-gray-500 hover:text-black',
  },
  {
    title: 'Digital Economy Conference 2023',
    date: '29 Jan',
    location: 'Grand Chapiteau',
    image: '/images/sampleThree.jpg',
    buttonStyle: 'bg-[#0f112e] text-white hover:bg-gray-500 hover:text-black',
  },
  {
    title: 'Digital thinkers meetup',
    date: '29 Jan',
    location: 'Grand Chapiteau',
    image: '/images/sampleOne.jpg',
    buttonStyle: 'bg-[#0f112e] text-white hover:bg-gray-500 hover:text-black',
  },
  {
    title: 'Web design conference 2023',
    date: '29 Jan',
    location: 'Grand Chapiteau',
    image: '/images/sampleTwo.jpg',
    buttonStyle: 'bg-[#0f112e] text-white hover:bg-gray-500 hover:text-black',
  },
  {
    title: 'Digital Economy Conference 2023',
    date: '29 Jan',
    location: 'Grand Chapiteau',
    image: '/images/sampleThree.jpg',
    buttonStyle: 'bg-[#0f112e] text-white hover:bg-gray-500 hover:text-black',
  },
];

const FeaturedEvents = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Past Events</h2>
        <p className="text-gray-600 mb-8">Take a look back at some of our most memorable events.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover"
                width={500}
                height={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {event.date} &nbsp; | &nbsp; {event.location}
                </p>
                <button
                  className={`w-full py-2 px-4 rounded flex items-center justify-center text-sm font-medium transition ${event.buttonStyle}`}
                >
                  View Details
                  <span className="ml-2">
                    <Icon icon="ph:arrow-up-right" width="25" height="25" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
