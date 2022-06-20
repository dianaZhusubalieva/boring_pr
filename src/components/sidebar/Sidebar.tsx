import React, { useEffect, useState } from "react";
import "./sidebar.scss";

const Sidebar = () => {
  const [isShortSidebar, setShortSidebar] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShortSidebar(true);
      } else setShortSidebar(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        return null;
      });
    };
  }, []);

  return (
    <div id="nav" className={`sidebar ${isShortSidebar && "sidebar__short"}`}>
      <div className="icon">
        <ul>
          <li>
            <a title="Home" href="./Sidebar#">
              <i className="fa fa-home "></i>
            </a>
          </li>
          <li>
            <a href="About">
              <i className="fa fa-search "></i>
            </a>
          </li>
          <li>
            <a href="./Sidebar#">
              <i className="fa fa-edit "></i>
            </a>
          </li>
          <li>
            <a href="./Sidebar#">
              <i className="fa fa-cog "></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="text">
        <ul>
          <li>
            <a title="Home" href="./Sidebar#">
              Home
            </a>
          </li>
          <li>
            <a href="./Sidebar#">Search</a>
          </li>
          <li>
            <a href="./Sidebar#">Contact</a>
          </li>
          <li>
            <a href="./Sidebar#">Settings</a>
          </li>
        </ul>
      </div>
      <div className="info">

        <div className="name">Di</div>
        <div className="quote">WHAT WE DO IS WHO WE ARE</div>
        <div className="social">
          <a target="_blank" href="https://twitter.com/tmrDevelops">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
