import React from "react";
import { UserIcon } from "@heroicons/react/solid"; // Heroicons library for person icon

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Gallery
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="relative group w-64 h-64 mx-auto rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              {/* Icon Container: Ensures the icon takes full space of the container */}
              <div className="flex justify-center items-center w-full h-full bg-gray-200 hover:bg-gray-300 transition duration-300">
                <UserIcon className="w-24 h-24 text-gray-500 group-hover:text-gray-700 transition duration-300" />
              </div>
              {/* Gradient and Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-30 transition duration-300 rounded-lg"></div>
              {/* Hover Text */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 text-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-lg font-semibold">Gallery Item {index + 1}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
