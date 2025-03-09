import React from "react";
import php7 from "./assets/php7.png";        
import html from "./assets/html.png";
import javascript from "./assets/javascript.png";
import css3 from "./assets/css3.svg";
import react from "./assets/react.svg";

// Autres composants
import ButtonGradient from "./assets/svg/ButtonGradient";  
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

import { companyLogos } from './constants'; // Assure-toi d'importer depuis le bon fichier




const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      {/* Section avec les images des technologies */}


      <ButtonGradient />
    </>
  );
};

export default App;
