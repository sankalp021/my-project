import React from "react";

// Example images for each sector. Replace these with actual images for better results.
import militaryImage from "./assets/military.jpg";
import recreationalImage from "./assets/recreation.jpg";
import commercialImage from "./assets/commercial.jpg";

const ExpertiseSection = () => {
  const expertiseData = [
    {
      sector: "Military",
      image: militaryImage,
      uses: [
        "Search & Rescue",
        "Underwater Mines",
        "At-sea Fleet Inspections",
        "Harbor Access Reconnaissance",
      ],
    },
    {
      sector: "Recreational",
      image: recreationalImage,
      uses: [
        "Scuba Diving",
        "Sport Fishing",
        "Undersea Video",
        "Exploring",
      ],
    },
    {
      sector: "Commercial",
      image: commercialImage,
      uses: [
        "Oil & Gas",
        "Offshore Wind Turbine Inspections",
        "Bridge and Infrastructure Inspections",
        "Coral Reef and Fisheries Monitoring",
      ],
    },
  ];

  return (
    <section id="expertise" className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Our Expertise Across Sectors
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {expertiseData.map((sector, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image with smooth gradient overlay */}
              <div className="relative w-full h-56 rounded-lg overflow-hidden mb-6">
                <img
                  src={sector.image}
                  alt={sector.sector}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{sector.sector}</h3>
                <p className="text-lg text-gray-600"> Use Cases</p>
              </div>

              <ul className="space-y-3 mt-4 text-gray-700">
                {sector.uses.map((use, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 text-lg font-semibold mr-4">•</span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
