// libraries
import React from "react";
import { NavLink } from "react-router-dom";

// styles
import "./header.scss";

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <div className="header-container">
        <div className="brand">
          <NavLink to="/">
            <span role="img" aria-label="football">
              ⚽️
            </span>{" "}
            League App
          </NavLink>
        </div>

        <nav>
          <ul className="unstyled">
            <li>
              <NavLink activeClassName="active" to="/table">
                table
              </NavLink>
            </li>

            <li>
              <NavLink activeClassName="active" to="/weeks">
                weeks
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
