import React from "react";
import { FaRocket, FaWater } from "react-icons/fa";
import amdrone from "./assets/amdrone.avif";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-white to-gray-200 py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12 leading-tight">
          Discover Amphibious Drones
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Amphibious drones are revolutionary devices designed to operate
              seamlessly in the air and underwater. With cutting-edge dual-mode
              technology, these drones redefine versatility for exploration and
              missions.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500 text-white rounded-full shadow-lg">
                  <FaRocket className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Aerial Mode</h3>
                  <p className="text-sm text-gray-600">
                    Operates with precision sensors in manual, semi-autonomous,
                    or fully autonomous modes.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500 text-white rounded-full shadow-lg">
                  <FaWater className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Sub-Surface Mode
                  </h3>
                  <p className="text-sm text-gray-600">
                    Patented technology enables effortless transitions between
                    air and underwater operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 duration-300 ease-in-out">
              <img
                src={amdrone}
                alt="Amphibious Drone"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
