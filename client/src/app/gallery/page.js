"use client";
import Image from "next/image";

const galleryItems = [
  {
    title: "Tea tasting",
    image: "/images/sampleOne.jpg",
    rowSpan: "col-span-1",
  },
  {
    title: "Plethora of books",
    image: "/images/sampleTwo.jpg",
    rowSpan: "col-span-2",
  },
  {
    title: "Chrysanthemum farm",
    image: "/images/sampleThree.jpg",
    rowSpan: "col-span-1",
  },
  {
    title: "Agricultural workshops",
    image: "/images/spaceNight.jpg",
    rowSpan: "col-span-2",
  },
  {
    title: "Performances",
    image: "/images/sampleFour.jpg",
    rowSpan: "col-span-1",
  },
  {
    title: "A miniature village",
    image: "/images/sampleFive.jpg",
    rowSpan: "col-span-1",
  },
  {
    title: "Tea tasting",
    image: "/images/sampleOne.jpg",
    rowSpan: "col-span-1",
  },
  {
    title: "Plethora of books",
    image: "/images/sampleTwo.jpg",
    rowSpan: "col-span-2",
  },
  {
    title: "Chrysanthemum farm",
    image: "/images/sampleThree.jpg",
    rowSpan: "col-span-1",
  },
  {
    title: "Agricultural workshops",
    image: "/images/spaceNight.jpg",
    rowSpan: "col-span-2",
  },
  {
    title: "Performances",
    image: "/images/sampleFour.jpg",
    rowSpan: "col-span-1",
  },
  {
    title: "A miniature village",
    image: "/images/sampleFive.jpg",
    rowSpan: "col-span-1",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium tracking-widest text-black mb-10">— GALLERY</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-md shadow-md ${item.rowSpan}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                <p className="text-white text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
