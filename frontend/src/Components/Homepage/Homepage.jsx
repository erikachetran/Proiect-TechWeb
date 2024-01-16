import { useState } from "react";
import "./Homepage.css";
import PhaseOne from "../Phases/PhaseOne/PhaseOne";
import PhaseTwo from "../Phases/PhaseTwo/PhaseTwo";
import PhaseThree from "../Phases/PhaseThree/PhaseThree";

function Homepage({ onLoginSuccess }) {
  const [activePhase, setActivePhase] = useState();

  return (
    <div className="homeContainer">
      {/* Estetizat homeDetails */}
      <div className="homeDetails">Bine ai venit!</div>
      {/* Estetizat homeButtons */}
      <div className="homeButtons">
        <div
          className="phaseOne phase"
          onClick={() => {
            setActivePhase(1);
          }}
        >
          Alege Profesor
        </div>
        <div
          className="phaseTwo phase"
          onClick={() => {
            setActivePhase(2);
          }}
        >
          Cerere de Încărcare
        </div>
        <div
          className="phaseThree phase"
          onClick={() => {
            setActivePhase(3);
          }}
        >
          Cerere Aprobată
        </div>
      </div>
      {/* Estetizat homePhases */}
      <div className="homePhases">
        {activePhase === 1 ? (
          <PhaseOne />
        ) : activePhase === 2 ? (
          <PhaseTwo />
        ) : activePhase === 3 ? (
          <PhaseThree />
        ) : null}
      </div>
    </div>
  );
}

export default Homepage;
