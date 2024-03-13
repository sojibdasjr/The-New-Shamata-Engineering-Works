import { useLoaderData, useNavigate } from "react-router-dom";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

const Portfolio = () => {
  const loadPortfolios = useLoaderData();
  const ourPortfolios = loadPortfolios.items;
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black">
      <div className="lg:max-w-7xl lg:mx-auto mx-4  py-16">
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <h1 className="text-2xl text-red-400 border px-5 rounded">
            <MdOutlineSubdirectoryArrowLeft />
          </h1>
        </button>
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
