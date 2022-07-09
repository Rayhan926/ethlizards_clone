import React from "react";
import { navLinks } from "../config/constants";

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg,rgba(4,15,21,0),rgba(4,14,20,.271) 50.52%,#040c12)",
      }}
      className="w-full min-h-[150px] flex items-end"
    >
      <div className="w-full backdrop-blur-[20px]">
        <div className="container">
          <div className="flex flex-col-reverse pt-5 pb-10 gap-y-7 md:p-0 md:flex-row items-center justify-between min-h-[100px]">
            <p className="body_text">Copyright © 2022 Ethlizards</p>
            <nav>
              <ul className="flex flex-wrap justify-center gap-5">
                {navLinks.map((navLink, i) => (
                  <li key={i}>
                    <a
                      href={navLink.url}
                      className="text-white/80 font-space-mono font-bold hover:text-white"
                    >
                      {navLink.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
