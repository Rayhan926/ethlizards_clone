import React from "react";
import { navLinks } from "../config/constants";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  return (
    <header className="bg-[#1b2226e6] fixed top-0 left-0 w-full z-50 backdrop-blur-[15px]">
      <div className="container flex items-center justify-between h-[90px]">
        {/* Logo --Start-- */}
        <div>
          <a href="/">
            <img
              src="/img/logo.png"
              alt="Ethlizards"
              className="max-w-[174px]"
            />
          </a>
        </div>
        {/* Logo --End-- */}

        {/* Nav --Start-- */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            {navLinks.map((navLink, i) => (
              <li key={i}>
                <a
                  href={navLink.url}
                  className="text-white font-space-mono font-bold hover:text-white/80 uppercase"
                >
                  {navLink.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Nav --End-- */}

        {/* Social Icons --Start-- */}
        <div className="hidden lg:block">
          <HeaderSocialIcons />
        </div>
        {/* Social Icons --End-- */}

        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;

const HeaderSocialIcons = () => {
  return (
    <ul className="flex items-center gap-7 [&>li]:text-white [&>li>a:hover]:opacity-80">
      <li>
        <a href="#" rel="noreferrer" target={"_blank"}>
          <BsTwitter size={20} />
        </a>
      </li>
      <li>
        <a href="#" rel="noreferrer" target={"_blank"}>
          <FaDiscord size={24} />
        </a>
      </li>
      <li>
        <a href="#" rel="noreferrer" target={"_blank"}>
          <img src="/img/opensea.png" alt="opensea" className="w-5 h-5" />
        </a>
      </li>
    </ul>
  );
};

const MobileHeader = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const closeSidebar = () => setIsOpenSidebar(false);
  return (
    <div className="lg:hidden">
      <div className="text-white" onClick={() => setIsOpenSidebar(true)}>
        <TbMenu2 color="#fff" size={38} />
      </div>

      {isOpenSidebar && (
        <div className="fixed top-0 left-0 w-full h-screen z-[999999]">
          <div className="w-[80%] ml-auto bg-black h-full relative px-[30px] py-[50px]">
            <div
              className="absolute top-0 right-0 p-4 text-white"
              onClick={closeSidebar}
            >
              <IoCloseSharp size={34} />
            </div>

            <div className="pl-[30px] pt-[30px]">
              <div>
                <a href="/">
                  <img
                    src="/img/logo.png"
                    alt="Ethlizards"
                    className="max-w-[196px]"
                  />
                </a>
              </div>

              <ul className="mt-[50px]">
                {navLinks.map((navLink, i) => (
                  <li key={i}>
                    <a
                      onClick={closeSidebar}
                      href={navLink.url}
                      className="text-white font-bakbak-one text-[16px] leading-[22px] py-3 block font-bold hover:text-white/80 uppercase"
                    >
                      {navLink.text}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-[30px]">
                <HeaderSocialIcons />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
