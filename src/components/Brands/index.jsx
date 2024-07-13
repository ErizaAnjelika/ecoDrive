import { brandList } from "../../services/data";
import "./style.css";

export const Brands = () => {
  const repeatedSlides = [...brandList, ...brandList];

  return (
    <div className="px-5 lg:px-20 mt-20">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-bold uppercase w-72 md:text-center md:w-full">
            trusted by some of amazing brands company
          </h1>
          <p className="text-gray-600 md:w-full md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sunt
            tempora tempore nesciunt reiciendis! Sequi illum facere est
            doloribus ea. Autem eaque architecto quisquam totam. A autem
            adipisci possimus quo!
          </p>
        </div>
        <div className="overflow-hidden whitespace-nowrap mt-10">
          <div className="marquee flex gap-5 items-center">
            {repeatedSlides.map((item, index) => (
              <div
                key={index}
                className="marquee-item flex flex-col items-center p-3 w-40 h-40"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <h1 className="text-lg font-medium capitalize mt-2">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
