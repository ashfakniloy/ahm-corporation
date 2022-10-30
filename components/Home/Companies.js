import Image from "next/image";
import AhmBlue from "../../public/images/companies/AHM Blue Horizons Logo.png";
import Dnata from "../../public/images/companies/Dnata logo.png";
import BlueVoyage from "../../public/images/companies/Blue Voyage Logo.png";
import AhmTrade from "../../public/images/companies/AHM Trade Venture Logo.png";

const companiesData = [
  {
    name: "AHM Blue Horizone",
    link: "#",
    image: AhmBlue,
  },
  {
    name: "Dnata BD",
    link: "#",
    image: Dnata,
  },
  {
    name: "Blue Voyage",
    link: "#",
    image: BlueVoyage,
  },
  {
    name: "AHM Trade Venture",
    link: "#",
    image: AhmTrade,
  },
];

function Companies() {
  return (
    <div className="container py-10 lg:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
        {companiesData.map((company, i) => (
          <div
            key={i}
            className="px-5 py-[3px] w-[250px] h-[250px] flex justify-center items-center rounded shadow-around hover:shadow-around-sm transition duration-300"
          >
            <Image src={company.image} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
