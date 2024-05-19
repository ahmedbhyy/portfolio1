import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [ShowModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => {
          setShowModel(true);
        }}
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentmode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentmode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {ShowModel && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModel(false)}
              />
            </li>
            <li>
              <a href="#" onClick={() => setShowModel(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setShowModel(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setShowModel(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => setShowModel(false)}>
                Education
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setShowModel(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
