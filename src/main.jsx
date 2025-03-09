import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";  // ton fichier principal avec les images
import "./index.css";  // Assure-toi que tu as des styles globaux ici

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />  {/* Tout le contenu du site, incluant les images, est dans App.jsx */}
    </Router>
  </React.StrictMode>
);
