import { useState } from "react"; // Importer useState REACT
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  const [openStep, setOpenStep] = useState(null); // Ajout de l'état pour l'étape sélectionnée

  const handleClick = (step) => {
    setOpenStep(openStep === step ? null : step); // Afficher ou cacher les informations de l'étape
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="A Propos de moi " />

        <p className="mt-4 text-xl text-center text-gray-1000 max-w-3xl mx-auto mb-10">
          Étudiant en BTS SIO option{" "}
          <span className="bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text underline decoration-transparent hover:decoration-[3px] hover:decoration-green-500">
            SLAM
          </span>{" "}
          (Service Informatique aux Organisations) au Lycée Sainte Marie à{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text underline decoration-transparent hover:decoration-[3px] hover:decoration-blue-500">
            Joinville le Pont
          </span>
          .
        </p>

        {/* Frise chronologique */}
        <div className="timeline mt-10">
          <h3 className="text-3xl font-bold text-center mb-6">Ma Frise Chronologique</h3>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-date">2021</div>
              <div className="timeline-content">
                <h4>BTS SIO SLAM</h4>
                <p>Début de mes études en BTS SIO option SLAM au Lycée Sainte Marie.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h4>Stage 1</h4>
                <p>Premier stage en entreprise pour développer mes compétences techniques.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h4>Projet de fin d'année</h4>
                <p>Travail sur un projet complet de développement d'application.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h4>Stage 2</h4>
                <p>Deuxième stage en entreprise avec un focus sur le développement web.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Fin de la frise chronologique */}

        {/* Texte Stage en dehors de la frise */}

        <p className="mt-12 text-4xl font-bold text-center text-gray-300">
  À propos du stage
</p>

<div className="flex justify-center mt-6">
  <button className="relative px-8 py-3 text-lg font-bold text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 hover:scale-105 hover:shadow-indigo-500/50 focus:outline-none">
    <span className="relative z-10">En savoir plus</span>
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg opacity-20 blur-lg"></span>
  </button>
</div>



   </div>
    </Section>
  );
};

export default Benefits;
