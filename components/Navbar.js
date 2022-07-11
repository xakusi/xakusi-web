import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import useResponsive from "../hooks/useResponsive";
import { useRouter } from "next/router";
export const Navbar = ({ openNavbar, setOpenNavbar }) => {
  const { _width } = useResponsive();
  return (
    <NavbarContainer>
      {_width > 1025 ? (
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
      ) : (
        <>
          <NavbarContent>
            <NavbarLogo>
              <a className="w-min-content">
                <Logo>Xakusi</Logo>
              </a>
            </NavbarLogo>
            <div>
              <button
                onClick={(e) => setOpenNavbar(!openNavbar)}
                type="button"
                on
              >
                {openNavbar ? (
                  <AiOutlineClose className="w-7 h-7" />
                ) : (
                  <AiOutlineMenu className="w-7 h-7" />
                )}
              </button>
            </div>
          </NavbarContent>
          {openNavbar && (
            <div className="w-screen items-start h-screen flex flex-col fixed px-6 pt-20 bg-white bg-opacity-70 backdrop-blur-lg z-60 pointer will-change-opacity overflow-scroll">
              <ul className="text-xl w-full uppercase font-900">
                <NavSmallItem
                  text={"Gallery"}
                  to="/gallery"
                  closeSidebar={() => setOpenNavbar(false)}
                />
                <NavSmallItem
                  text={"Mint"}
                  to="/mint"
                  closeSidebar={() => setOpenNavbar(false)}
                />
                <NavSmallItem
                  text={"Buy"}
                  disabled
                  closeSidebar={() => setOpenNavbar(false)}
                />
                <NavSmallItem
                  text={"Twitter"}
                  disabled
                  icon={<AiOutlineTwitter />}
                  closeSidebar={() => setOpenNavbar(false)}
                />
                <NavSmallItem
                  text={"Instagram"}
                  disabled
                  icon={<AiFillInstagram />}
                  closeSidebar={() => setOpenNavbar(false)}
                />
                <NavSmallItem
                  disabled
                  text={"Discord"}
                  icon={<FaDiscord />}
                  closeSidebar={() => setOpenNavbar(false)}
                />
              </ul>
            </div>
          )}
        </>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = tw.div`
    fixed w-full top-0 lg:px-8 px-5 lg:pt-8 pt-5 z-70 bg-white
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
  const router = useRouter();
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);

  const goTo = () => {
    router.push(to);
  };
  return (
    <li>
      <NavItemText onClick={goTo} className={pathname === to && "underline"}>
        {children ? children : text}
      </NavItemText>
    </li>
  );
};

const NavItemText = tw.div`
dark:text-white

cursor-pointer
text-black
text-black opacity-80 items-center relative h-7 
items-center font-mono tracking-wider pt-0.5 first::pt-0 
duration-1000 uppercase text-xs font-500 padding-huge 
duration-200 items-center px-4 hover:bg-opacity-70 rounded
flex justify-center flex-row bg-white bg-opacity-50 hover:bg-opacity-100
`;

const NavSmallItem = ({ text, to, children, closeSidebar, icon, disabled }) => {
  const router = useRouter();
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(router.pathname);
  }, [router.pathname]);

  const goTo = () => {
    router.push(to);
    closeSidebar();
  };
  return (
    <li className="border-b border-black border-opacity-10">
      <div
        className={`py-3 w-full text-2xl items-center block relative flex text-black font-bold ${
          disabled ? "cursor-not-allowed text-opacity-50" : "cursor-pointer"
        }`}
        onClick={goTo}
      >
        {icon ? (
          <div className="flex mr-4 w-full justify-between items-center">
            {text}
            {icon}
          </div>
        ) : (
          <>{text}</>
        )}
      </div>
    </li>
  );
};
