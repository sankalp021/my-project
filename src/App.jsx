import React from "react";
import NavigationBar from "./navigationBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FeaturesSection from "./FeaturesSection";
import GallerySection from "./GallerySection";
import Footer from "./Footer";

import dronevid from "./assets/dronevideo.mp4";
import ExpertiseSection from "./ExpertiseSection";

const App = () => {
  

  return (
    <div className="font-sans text-gray-800">
      <NavigationBar />
      <HeroSection videoSrc={dronevid} />
      <AboutSection />
      <FeaturesSection />
      <GallerySection  />
      <ExpertiseSection />
      <Footer />
    </div>
  );
};

export default App;
