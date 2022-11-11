import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import Link from "next/link";

function Dropdown({ navLinks, closeDropdown }) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="lg:hidden bg-slate-100 py-4">
        {navLinks.map((navLink, i) => (
          // <Link key={i} href={navLink.link}>
          <Link
            key={i}
            // className="cursor-pointer transition-all duration-300"
            activeClass="active"
            to={navLink.link}
            spy={true}
            smooth={true}
            offset={-85}
            duration={500}
            onClick={closeDropdown}
            // onSetActive={() => setActiveBorder(i)}
            // onSetInactive={() => setActiveBorder(false)}
          >
            <p className="px-5 py-2 text-custom-gray text-sm tracking-wider font-semibold uppercase">
              {navLink.name}
            </p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Dropdown;
