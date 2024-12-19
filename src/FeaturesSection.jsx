import React from "react";
import amdrone from "./assets/dropic.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white to-gray-100 py-16 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12 leading-tight">
          What Are Amphibious Drones?
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
              <img
                src={amdrone}
                alt="Amphibious Drone"
                className="object-cover w-full h-full transition duration-500 ease-in-out"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-600/40 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Amphibious drones represent a leap forward in hybrid technology, capable of operating both in the air and underwater. 
              These drones offer seamless transition between aerial and sub-surface missions, making them invaluable for a wide range of operations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Equipped with advanced sensors, these drones are perfect for search and rescue missions, environmental monitoring, 
              and underwater exploration. Whether on land, in the sky, or beneath the waves, our amphibious drones redefine what's possible in hybrid drone technology.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20 text-center space-y-10">
          <h3 className="text-3xl font-semibold text-gray-800">
            Key Features of Amphibious Drones
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center max-w-xs">
              <div className="bg-black text-white p-6 rounded-full shadow-xl mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Aerial Precision</h4>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Operates with advanced sensors for precise flight, offering manual, semi-autonomous, or fully autonomous modes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center max-w-xs">
              <div className="bg-black text-white p-6 rounded-full shadow-xl mb-4">
                <span className="text-3xl">🌊</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Underwater Mobility</h4>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Patented technology ensures smooth transitions between air and underwater operations with minimal loss of efficiency.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center max-w-xs">
              <div className="bg-black text-white p-6 rounded-full shadow-xl mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Modular Design</h4>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Customize your drone with different sensors and tools for mission-specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
