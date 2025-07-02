import { events } from "../../../../public/data/event"; // adjust if in pages directory
import Image from "next/image";

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetailPage({ params }) {
  const id = params.id;

  const event = events.find((e) => e.id === id);

  if (!event) return <p className="p-6">Event not found</p>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" space-x-10  py-12 px-4 flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <Image
            src={event.image}
            alt={event.title}
            width={900}
            height={500}
            className="rounded-lg mb-6 w-full h-96 object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {event.title}
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Date:</strong> {event.date} | <strong>Location:</strong>{" "}
            {event.location}
          </p>
          <p className="text-gray-700 leading-relaxed">{event.description}</p>
        </div>
      </div>
      <div className="px-4 mb-8">
        <p>{event.details}</p>
        <div className="text-center mt-10 justify-center items-center">
          <h2 className="text-4xl font-bold text-gray-900 my-10  text-center">
            Guests
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
            {event.guests.map((guest, index) => (
              <div key={index} className="text-center justify-center">
                <div className="w-48 h-48 flex justify-center items-center rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-lg mb-4 mx-auto">
                  <Image
                    src={guest.image}
                    alt={guest.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-xl text-[#321B6F]">
                  {guest.name}
                </h3>
                <p className="text-purple-600 text-md">{guest.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10">
  <h2 className="text-4xl font-bold text-gray-900 my-10 text-center">Sponsors</h2>

  {/* Grid container */}
  <div className="w-full max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4 mb-8 justify-items-center">
    {event.sponsors.map((sponsor, index) => (
      <div key={index} className="text-center">
        <div className="w-48 h-48 flex justify-center items-center rounded-full overflow-hidden shadow-lg mb-4 mx-auto">
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="mt-4 font-semibold text-xl text-[#321B6F]">{sponsor.name}</h3>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
