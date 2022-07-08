import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogo>
          <a className="w-min-content">
            <Logo>Xakusi</Logo>
          </a>
        </NavbarLogo>
        <Navigation>
          <ul className="flex space-x-2">
            <NavItem text="gallery" to="/gallery" />
            <NavItem text="Mint" to="/mint" />
            <NavItem text="Buy" to="/opensea" />
            <NavItem>
              <AiFillInstagram
                size={24}
                className="dark:text-white text-black"
              />
            </NavItem>
            <NavItem>
              <AiOutlineTwitter
                size={24}
                className="dark:text-white text-black"
              />
            </NavItem>
            <NavItem>
              <FaDiscord size={24} className="dark:text-white text-black" />
            </NavItem>
          </ul>
        </Navigation>
      </NavbarContent>
    </NavbarContainer>
  );
};

const NavbarContainer = tw.div`
    fixed w-full top-0 lg:px-8 px-5 lg:pt-8 pt-5 z-70
`;

const NavbarContent = tw.div`
    flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0
`;

const NavbarLogo = tw.div`
    flex-grow
`;

const Logo = tw.div`
    text-white tracking-widest uppercase font-black px-3 py-1 bg-blue-600 w-fit rounded-md
`;

const Navigation = tw.div`
    items-center  lg:flex dark:text-white
`;

const NavItem = ({ text, to, children }) => {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  return (
    <li>
      <NavItemText href={to} className={pathname === to && "underline"}>
        {children ? children : text}
      </NavItemText>
    </li>
  );
};

const NavItemText = tw.a`
dark:text-white
text-black
text-black opacity-80 items-center relative h-7 
items-center font-mono tracking-wider pt-0.5 first::pt-0 
duration-1000 uppercase text-xs font-500 padding-huge 
duration-200 items-center px-4 hover:bg-opacity-70 rounded
flex justify-center flex-row bg-white bg-opacity-50 hover:bg-opacity-100
`;
