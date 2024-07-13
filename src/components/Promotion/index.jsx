import { promotionList } from "../../services/data";
export const Promotion = () => {
  return (
    <div className="mt-10 px-5 lg:px-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="hidden lg:block"
      >
        <img
          src="/img/electric-car.jpg"
          alt=""
          className="w-full h-full object-cover rounded-br-[200px] rounded-tl-[200px]"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="p-0 md:px-3 lg:p-10 space-y-6"
      >
        <h1 className="text-3xl font-bold capitalize text-gray-800">
          Why Choose Electric Cars?
        </h1>
        <div className="space-y-5">
          {promotionList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-6"
            >
              <img src={item.icon} alt="" className="w-16 h-16" />
              <p className="text-gray-600 font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
