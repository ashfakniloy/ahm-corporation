import Image from "next/image";
import AhmBlue from "../../public/images/companies/AHM Blue Horizons Logo.png";
import Dnata from "../../public/images/companies/Dnata logo.png";
import BlueVoyage from "../../public/images/companies/Blue Voyage Logo.png";
import AhmTrade from "../../public/images/companies/AHM Trade Venture Logo.png";
import { StaggerParent, StaggerDownFade } from "../../animations";

const companiesData = [
  {
    name: "AHM Blue Horizone",
    link: "https://ahm-blue-horizons.vercel.app",
    image: AhmBlue,
  },
  {
    name: "Dnata BD",
    link: "http://dnatabd.com",
    image: Dnata,
  },
  {
    name: "Blue Voyage",
    link: "https://blue-voyage.vercel.app",
    image: BlueVoyage,
  },
  {
    name: "AHM Trade Venture",
    link: "https://ahm-trade-venture.vercel.app",
    image: AhmTrade,
  },
];

function Companies() {
  return (
    <div id="our-companies" className="container py-10 lg:py-[100px]">
      <StaggerParent>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          {companiesData.map((company, i) => (
            <div key={i}>
              <a href={company.link} target="_blank" rel="noreferrer">
                <StaggerDownFade>
                  <div className="px-5 py-[3px] w-[250px] h-[250px] flex justify-center items-center rounded shadow-around hover:shadow-around-sm transition duration-300">
                    <Image src={company.image} alt={company.name} priority />
                  </div>
                </StaggerDownFade>
              </a>
            </div>
          ))}
        </div>
      </StaggerParent>
    </div>
  );
}

export default Companies;
