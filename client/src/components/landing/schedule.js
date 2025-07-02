import Image from "next/image";

const sessions = [
  {
    time: "9.30 - 10.30 AM",
    type: "Workshop",
    bg: "bg-[#321B6F]",
    speaker: {
      name: "James Killer",
      image: "/images/womenPortrait.jpg",
      title: "Marketing Matters!",
      description:
        "How you transform your business as technology, consumer, habits industry dynamics change? Find out from those leading the charge. How you transform",
    },
  },
  {
    time: "10.30 - 11.30 AM",
    type: "Workshop",
    bg: "bg-[#321B6F]",
    speaker: {
      name: "Melisa Rock",
      image: "/images/menPortrait.jpg",
      title: "Reinventing Experiences",
      description:
        "How you transform your business as technology, consumer, habits industry dynamics change? Find out from those leading the charge. How you transform",
    },
  },
  {
    time: "11.30 - 12.30 PM",
    type: "Workshop",
    bg: "bg-[#321B6F]",
    speaker: {
      name: "Agaton Ronald",
      image: "/images/womenPortrait.jpg",
      title: "Cultures of Creativity",
      description:
        "How you transform your business as technology, consumer, habits industry dynamics change? Find out from those leading the charge. How you transform",
    },
  },
];

const eventDates = [
  { date: "14th Feb", day: "Friday", gradient: "from-orange-400 to-pink-400", zIndex: 10 },
  { date: "15th Feb", day: "Saturday", gradient: "from-blue-400 to-blue-200", zIndex: 0 },
  { date: "16th Feb", day: "Sunday", gradient: "from-blue-400 to-blue-200", zIndex: 0 },
];

export default function Schedule() {
  return (
    <section className="py-12 bg-[#0f112e] px-4">
      <div className="max-w-7xl mx-auto py-8">
        <div className="md:w-1/2">
          <p className="text-sm tracking-widest text-purple-600 font-semibold uppercase mb-2">
            Schedule Details
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Information of Event Schedules
          </h2>
          <p className="text-gray-400 text-base">
            World is committed to making participation in the event a harassment-free
            experience for everyone, regardless of level of experience, gender,
            gender identity and expression
          </p>
      </div>
    </div>
      <div className="max-w-7xl mx-auto border border-gray-200">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-5 border-b border-dashed border-gray-300"
          >
            {/* Time Column */}
            <div
              className={`md:col-span-1 ${session.bg} text-white p-6 font-bold text-sm flex flex-col justify-center`}
            >
              <span className="text-lg">{session.time}</span>
              <span className="uppercase mt-1">{session.type}</span>
            </div>

            {/* Details Column */}
            <div className="md:col-span-4 flex flex-col md:flex-row gap-6 items-start p-6">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={session.speaker.image}
                  alt={session.speaker.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="text-white">
                <p className="text-lg text-purple-600">{session.speaker.name}</p>
                <h3 className="text-xl font-semibold mb-2">
                  {session.speaker.title}
                </h3>
                <p className="text-gray-400 text-md">
                  {session.speaker.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
