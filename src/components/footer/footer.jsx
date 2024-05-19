import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <footer className="flex">
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
      <p>© 2024 Ahmed Belhajyahia. All rights reserved.</p>
    </footer>
  );
}
