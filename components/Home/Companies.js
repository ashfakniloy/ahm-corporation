// import Image from "next/image";
import Image from "next/legacy/image";
import React from "react";
import AhmBlue from "../../public/images/companies/AHM Blue Horizons Logo.png";
import Dnata from "../../public/images/companies/Dnata logo.png";
import BlueVoyage from "../../public/images/companies/Blue Voyage Logo.png";
import AhmTrade from "../../public/images/companies/AHM Trade Venture Logo.png";
const companiesData = [
  {
    name: "AHM Blue Horizone",
    link: "#",
    image: AhmBlue,
    width: 200,
    height: 200,
    // image: '/images/companies/AHM Blue Horizons Logo.png",
  },
  {
    name: "Dnata BD",
    link: "#",
    image: Dnata,
    width: 200,
    height: 130,
    // image: "/images/companies/Dnata logo.png",
  },
  {
    name: "Blue Voyage",
    link: "#",
    image: BlueVoyage,
    width: 200,
    height: 70,
    // image: "/images/companies/Blue Voyage Logo.png",
  },
  {
    name: "AHM Trade Venture",
    link: "#",
    image: AhmTrade,
    width: 200,
    height: 190,
    // image: "/images/companies/AHM Trade Venture Logo.png",
  },
];

function Companies() {
  return (
    <div className="container py-10 lg:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
        {companiesData.map((company, i) => (
          <div
            key={i}
            className="px-5 py-[30px] w-[250px] h-[250px] flex justify-center items-center shadow-lg hover:shadow-md transition duration-300"
          >
            {/* <div className="relative w-full h-[200px]"> */}
            <div className="relative">
              <Image
                src={company.image}
                alt={company.name}
                width={company.width}
                height={company.height}
                // layout="fill"
                // objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
