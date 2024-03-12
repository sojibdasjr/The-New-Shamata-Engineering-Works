import { useLoaderData } from "react-router-dom";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
  const loadPortfolios = useLoaderData();
  const ourPortfolios = loadPortfolios.items;

  return (
    <div className="bg-white text-black">
      <div className="lg:max-w-7xl lg:mx-auto mx-4  py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {ourPortfolios.map((item, index) => (
            <PortfolioCard key={index} portfolio={item}></PortfolioCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
