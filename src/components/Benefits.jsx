import { useState } from "react";
import { benefits } from "../constants";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* Frise Chronologique */}
        <div className="mt-20">
          <div className="container relative z-2">
            <Heading className="md:max-w-md lg:max-w-2xl" title="Ma Frise Chronologique" />
            <p className="mt-4 text-xl text-center text-gray-9000 max-w-3xl mx-auto mb-10">
              Étudiant en BTS SIO option
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text underline decoration-transparent hover:decoration-[3px] hover:decoration-purple-500">
                SLAM
              </span>
              (Service Informatique aux Organisations) au Lycée Sainte Marie à
              <span className="bg-gradient-to-r from-indigo-600 to-violet-800 text-transparent bg-clip-text underline decoration-transparent hover:decoration-[3px] hover:decoration-indigo-600">
                Joinville le Pont
              </span>.
            </p>

            <div className="timeline mt-10">
              <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">Ma Frise Chronologique</h3>
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-date text-gray-700">2021</div>
                  <div className="timeline-content">
                    <h4 className="text-gray-900">BTS SIO SLAM</h4>
                    <p>Début de mes études en BTS SIO option SLAM au Lycée Sainte Marie.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date text-gray-700">2022</div>
                  <div className="timeline-content">
                    <h4 className="text-gray-900">Stage 1</h4>
                    <p>Premier stage en entreprise pour développer mes compétences techniques.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date text-gray-700">2023</div>
                  <div className="timeline-content">
                    <h4 className="text-gray-900">Projet de fin d'année</h4>
                    <p>Travail sur un projet complet de développement d'application.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date text-gray-700">2024</div>
                  <div className="timeline-content">
                    <h4 className="text-gray-900">Stage 2</h4>
                    <p>Deuxième stage en entreprise avec un focus sur le développement web.</p>
                  </div>
                </div>
              </div>
            </div>



            <div className="flex justify-center mt-6">

</div>

<p className="mt-12 text-4xl font-bold text-center text-gray-300">À propos du stage</p>

<div className="flex justify-center mt-6">
  <button className="relative px-8 py-3 text-lg font-bold text-white uppercase transition-all duration-300 bg-gradient-to-r from-indigo-600 to-violet-700 rounded-2xl shadow-lg hover:from-violet-700 hover:to-purple-800 hover:scale-105 hover:shadow-indigo-500/50 focus:outline-none animate-gradient flex items-center justify-center">
    <span className="relative z-10 block">En savoir plus</span>
 
    
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-violet-700 rounded-2xl opacity-30 blur-xl"></span>
  </button>


            </div>
          </div>
        </div>

        {/* Section d'arrière-plan avec sphère et étoiles */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />  
          </div>
        </div>

{/* Titre principal de la section */}
<Heading tag="" title="Mes Projects" />
<Heading tag="SLAM" title="" />



        {/* Liste de tarification */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* Lien vers la section des projets */}
        <div className="flex justify-center mt-10">
          
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="#projects" //  pointe vers la section des projets
          > 
            Voir les détails complets
          </a>
        </div>
      </div>

      {/* Section des projets avec ID "projects" */}
      <div id="projects" className="mt-20">
  
  
        {/* Liste des projets */}
      </div>
    </Section>
  );
};

export default Pricing;
