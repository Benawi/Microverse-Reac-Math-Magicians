import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = () => (
  <header className="header-container">
    <h1 className="nav-title">Math Magicians</h1>
    <nav>
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
          <span>|</span>
        </li>
        <li>
          <Link to="calculator">Calculator</Link>
          <span>|</span>
        </li>
        <li>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavigationLinks;
