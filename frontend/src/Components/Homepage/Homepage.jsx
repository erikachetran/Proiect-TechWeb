import { useState } from "react";
import "./Homepage.css";
import PhaseOne from "../Phases/PhaseOne/PhaseOne";
import PhaseTwo from "../Phases/PhaseTwo/PhaseTwo";
import PhaseThree from "../Phases/PhaseThree/PhaseThree";

function Homepage({ onLoginSuccess }) {
  const [activePhase, setActivePhase] = useState();

  return (
    <div className="homeContainer">
      <div className="homeDetails">Bine ai venit!</div>
      <div className="homeButtons">
        <div
          className="phaseOne phase"
          onClick={() => {
            setActivePhase(1);
          }}
        >
          Selectați Profesorul
        </div>
        <div
          className="phaseTwo phase"
          onClick={() => {
            setActivePhase(2);
          }}
        >
          Încărcați Cererea
        </div>
        <div
          className="phaseThree phase"
          onClick={() => {
            setActivePhase(3);
          }}
        >
          Descarcă Cererea Aprobată
        </div>
      </div>
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
