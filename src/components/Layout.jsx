import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const paths = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/portfolio", name: "Portfolio" },
  { path: "/team", name: "Team" },
  { path: "/pricing", name: "Pricing" },
  { path: "#", name: "DropDown", icon: <FaChevronDown /> },
  { path: "/contact", name: "Contact" },
];

const Layout = ({ children }) => {
  return (
    <div
      className="layout"
      //   style={{
      //     backgroundImage: `url("https://via.placeholder.com/500")`,
      //   }}
    >
      <header>
        <div className="logo">OnePage</div>
        <ul>
          {paths.map((path) => {
            return (
              <li>
                <Link to={path.path}>
                  {path.name} {path.icon ? <span>{path.icon}</span> : null}
                </Link>
              </li>
            );
          })}
          <button>Get Started</button>
        </ul>
      </header>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
