import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// import logo from "../../images/logo.png";

const NAVBAR_ITEMS = ["About"];

const NavBarItem = ({ title, className }) => {
  return <li className={`mx-4 cursor-pointer ${className}`}>{title}</li>;
};

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <span className="text-2xl font-semibold text-white cursor-pointer">
          Logo
        </span>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {NAVBAR_ITEMS.map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-pink-400 py-2 px-7 mx-4 rounded-full cursor-pointer hover:shadow-lg transition ease-in-out delay-150">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            onClick={handleToggle}
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
          />
        ) : (
          <HiMenuAlt4
            onClick={handleToggle}
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
          />
        )}
        {!!toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism border-none text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                onClick={handleToggle}
                className="cursor-pointer"
              />
            </li>
            {NAVBAR_ITEMS.map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                className="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
