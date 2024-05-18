import React from 'react'
import './footer.css'

export default function footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <p>© 2024 Ahmed Belhajyahia. All rights reserved.</p>
    </footer>
  );
}
