import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useEffectOnce, useEventListener } from "usehooks-ts";

import { Moon, Sun } from "../svg/DarkModeIcons";

// Built with Vivid (https://vivid.lol) ⚡️

export const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [top, setTop] = useState(true);
  const [nextSection, setNextSection] = useState(false);
  const [reloaded, setReloaded] = useState(false);

  // Handle scrolling logic
  const handleScroll = () => {
    setTop(window.pageYOffset <= 10);
    setNextSection(window.pageYOffset > window.innerHeight);
  };
  useEventListener("scroll", handleScroll);

  // Clean up stale dark mode
  useEffectOnce(() => setReloaded(true));

  const goToEmail = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Logo = () => (
    <Link href="/">
      <div className="flex flex-row items-center gap-1">
        <Image
          src="/images/thirdbracket.svg"
          alt="thirdbracket.co.uk"
          height="50"
          width="50"
        />
        <div className="text-3xl font-bold hidden lg:block md:block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-color1  via-neon-color2 via-neon-color3 via-neon-color4 to-neon-color5">
            thirdbracket
          </span>
        </div>
      </div>
    </Link>
  );

  const Navigation = () => (
    <nav>
      <ul className="flex flex-row items-center gap-2">
        {reloaded ? ( // Only show after first reload
          <li>
            <button
              type="button"
              onClick={toggleDarkMode}
              title="Toggle dark mode"
              aria-label="Toggle dark mode"
              className="text-gray-600 hover:text-neon-slatedark dark:text-gray-400 hover:bg-neon-slatelightmd/40 dark:hover:bg-neon-slatedarker rounded-lg text-sm p-2.5"
            >
              {isDarkMode ? <Moon /> : <Sun />}
            </button>
          </li>
        ) : null}
        <li>
          <Link
            href="https://musabbirsagar.com/blog"
            target="_blank"
            // className="text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5"
            className="flex items-center font-bold text-gray-600 hover:text-neon-slatedarker  dark:text-gray-400 hover:bg-neon-slatelightmd/40 dark:hover:bg-neon-slatedarker rounded-lg text-md p-3"
          >
            Blog
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg> 
          </Link>
        </li>

        {/* <li>
          <FloatingWhatsApp
            phoneNumber="881765692886"
            accountName="Musabbir Sagar"
            className="px-4 py-2 font-bold rounded-lg text-gray-50 bg-primary-600 hover:bg-primary-700 w-fit"
          ></FloatingWhatsApp>
        </li> */}
        <li className={`transition ${!nextSection && "hidden"}`}>
          <button
            type="button"
            onClick={goToEmail}
            // className="px-4 py-2 font-bold rounded-lg text-gray-50 bg-neon-teal hover:bg-primary-700 w-fit"
            // className="px-3 py-1.5 font-bold rounded-lg bg-transparent text-neon-teal hover:text-neon-blue border-2 border-neon-teal hover:border-neon-blue"
            className="text-transparent bg-clip-text bg-gradient-to-r from-neon-color2 to-neon-color4  px-3 py-1.5 font-bold rounded-md hover:text-color3"
          >
            Join
          </button>
        </li>
      </ul>
    </nav>
  );

  return (
    // Colors must be set explicitly since opacity and blur don't work together
    <header
      className={`fixed w-full z-30 transition duration-300 ${
        !top && "bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      {/* Header Content */}
      <div className="flex flex-row items-center justify-between h-16 px-5 mx-auto md:h-20 max-w-7xl sm:px-6">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
