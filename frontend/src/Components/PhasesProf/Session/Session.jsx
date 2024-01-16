import "./Session.css";

function Session({ sessionId, currentStudents, maxStudents, onClick }) {
  const handleClickSession = () => {
    document.getElementById("phaseMain").style.display = "none";
    document.getElementById("phasePre").style.display = "block";
    onClick(sessionId);
  };

  return (
    <div className="sessionContainer" onClick={handleClickSession}>
      <div className="sessionId">Id sesiune: {sessionId}</div>
      <div className="currentStudents">
        Nr. studenti actual: {currentStudents}
      </div>
      <div className="maxStudents">Nr. studenti maxim: {maxStudents}</div>
    </div>
  );
}

export default Session;
