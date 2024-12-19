import React from "react";


const HeroSection = ({ videoSrc }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-wide">
          India's First AI-Enabled <br /> Amphibious and Underwater Drones
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
          Revolutionizing hybrid drone technology for groundbreaking exploration and innovation.
        </p>
        <div className="flex justify-center gap-4">
          {/* <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">
            Explore More
          </button> */}
          {/* <button className="bg-transparent border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black transition-transform transform hover:scale-105">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
