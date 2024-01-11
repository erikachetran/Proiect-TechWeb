import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { header, url } from "../Constants.js";
import "./Register.css";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isProfessor, setIsProfessor] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsProfessor(!isProfessor);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    let routeLink = isProfessor === true ? "professor" : "student";
    axios
      .post(
        `${url}${routeLink}/register`,
        { email, password, name, repeatPassword },
        header
      )
      .then((res) => {
        toast.success("Account created successfully!");
        sleep(500).then(() => {
          navigate("/login");
        });
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  return (
    <div className="registerPage">
      <div className="registerContainer">
        <div className="registerTitle">Înregistrează-te ca:</div>
        <form className="registerForm" onSubmit={handleRegister}>
          <div className="switch-container">
            <label className="switch">
              <input
                type="checkbox"
                checked={isProfessor}
                onChange={handleToggle}
              />
              <span className="slider round"></span>
            </label>
            <span className="roleLabel">
              {isProfessor ? "Professor" : "Student"}
            </span>
          </div>
          <label htmlFor="name">Nume</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Parola</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="repeatpassword">Repetă parola</label>
          <input
            type="password"
            id="repeatpassword"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div class="registerBtnContainer">
            <button type="submit" className="registerBtn">
              Înregistrează-te
            </button>
            <button
              type="submit"
              className="registerBtn"
              onClick={() => navigate("/login")}
            >
              Pagina de autentificare
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
