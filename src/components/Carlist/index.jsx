import { useState } from "react";
import { carCategory, carList } from "../../services/data";
import { Link } from "react-router-dom";
export const CarList = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(1);

  const handleCategoryClick = (id) => {
    setActiveCategoryId(id);
  };

  const selectedCars =
    carList.find((item) => item.categoryId === activeCategoryId)?.cars || [];
  return (
    <div className="px-5 lg:px-20 mt-16">
      <div className="flex justify-center ">
        <h1 className="text-3xl text-center font-bold capitalize w-72">
          Bestselling Electric Car Models
        </h1>
      </div>
      <div className="mt-8">
        <ul className="flex flex-wrap gap-2 justify-center items-center">
          {carCategory.map((item, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(item.id)}
              className={`cursor-pointer px-4 font-bold rounded-full py-1 ${
                activeCategoryId === item.id
                  ? "bg-orange-500 text-white" // warna aktif
                  : "bg-[#98ab9b] text-green-950" // warna default
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
          {selectedCars.map((item) => (
            <div
              key={item.id}
              data-aos="flip-left"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-center justify-center bg-white shadow-md py-10 rounded-3xl space-y-5"
            >
              <img
                src={item.image}
                alt="toyota"
                className="w-full h-40 object-cover"
              />
              <h1 className="text-xl font-medium">{item.name}</h1>
              <div className="flex gap-5">
                <div className="flex items-center gap-1">
                  <img src="/img/seater.png" alt="seater" className="w-6 h-6" />
                  <h5 className="text-sm font-normal">{item.seater} Seater</h5>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/img/steering.png"
                    alt="seater"
                    className="w-5 h-5"
                  />
                  <h5 className="text-sm font-normal">{item.jenis}</h5>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    src="/img/speedometer.png"
                    alt="seater"
                    className="w-6 h-6"
                  />
                  <h5 className="text-sm font-normal">{item.kecepatan}</h5>
                </div>
              </div>
              <h1 className="text-lg font-bold text-green-950">{item.harga}</h1>
              <div className="flex items-center gap-2">
                <Link to={`/detail/${item.id}`}>
                  <button className="bg-[#ff7803] font-bold text-white px-4 py-2 rounded-full w-32 hover:bg-orange-600">
                    Details
                  </button>
                </Link>
                <Link to={`/buy/${item.id}`}>
                  <button className="bg-[#86a18b] font-bold text-green-950 px-4 py-2 rounded-full w-32 hover:bg-green-600">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
