import Image from "next/image";
// import Link from "next/link";
import useScroll from "../../hooks/useScroll";
import { navLinks } from "./navLinks";
import AhmLogo from "../../public/images/logo/ahm-corporation-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

function Header() {
  const [toggle, setToggle] = useState(false);

  const { scroll } = useScroll();

  // return (
  //   <div
  //     className={`fixed z-10 w-full border-b transition-all duration-300 ${
  //       scroll
  //         ? "bg-white text-custom-gray shadow"
  //         : "bg-transparent text-white border-gray-500"
  //     }`}
  //   >
  //     <div className="container py-4 flex justify-between items-center">
  //       {/* <div className="text-[26px] font-bold">AHM Corporation</div> */}
  //       <Link href="/">
  //         <div className="w-[100px]">
  //           <Image src={AhmLogo} alt="ahm logo" />
  //         </div>
  //       </Link>

  //       <div className="hidden lg:flex gap-10 text-sm font-semibold tracking-wider uppercase">
  //         {navLinks.map((navLink, i) => (
  //           <div key={i} className="">
  //             <Link href={navLink.link}>{navLink.name}</Link>
  //           </div>
  //         ))}
  //       </div>

  //       <button
  //         type="button"
  //         className="lg:hidden text-xl text-custom-blue"
  //         onClick={() => setToggle(!toggle)}
  //       >
  //         {toggle ? <FaTimes /> : <FaBars />}
  //       </button>
  //     </div>
  //     <AnimatePresence>
  //       {toggle && <Dropdown navLinks={navLinks} />}
  //     </AnimatePresence>
  //   </div>
  // );

  return (
    <div
      className={`fixed z-10 w-full border-b transition-all duration-300 ${
        scroll
          ? "bg-white text-custom-gray shadow"
          : "bg-transparent text-white border-gray-500"
      }`}
    >
      <div className="container py-4 flex justify-between items-center">
        {/* <div className="text-[26px] font-bold">AHM Corporation</div> */}
        {/* <Link href="/"> */}
        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          <div className="w-[100px]">
            <Image src={AhmLogo} alt="ahm logo" />
          </div>
        </Link>

        <div className="hidden lg:flex gap-10 text-sm font-semibold tracking-wider uppercase">
          {navLinks.map((navLink, i) => (
            <div key={i} className="">
              <Link
                className="cursor-pointer transition-all duration-300"
                activeClass="active"
                to={navLink.link}
                spy={true}
                smooth={true}
                offset={-105}
                duration={500}
                // onSetActive={() => setActiveBorder(i)}
                // onSetInactive={() => setActiveBorder(false)}
              >
                {navLink.name}
              </Link>
              {/* <div
                className={`h-[2px] transition-all duration-300 ${
                  activeBorder === i ? "bg-custom-blue" : "bg-transparent"
                } `}
              ></div> */}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-xl text-custom-blue"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {toggle && (
          <Dropdown
            navLinks={navLinks}
            closeDropdown={() => setToggle(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
