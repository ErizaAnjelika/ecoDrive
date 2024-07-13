import { Link, useParams } from "react-router-dom";
import { carList } from "../../services/data";
import { useState } from "react";
import { Alamat } from "../Alamat";
import "./style.css";
import { Bank, Debit } from "../Payment";

export const BuyCar = () => {
  const { id } = useParams();
  const car = carList
    .flatMap((category) => category.cars)
    .find((car) => car.id === parseInt(id));

  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 0));
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  const convertPriceToNumber = (price) => {
    return parseInt(price.replace(/[^\d]/g, ""), 10);
  };

  const formatPrice = (price) => {
    return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  const totalPrice = formatPrice(convertPriceToNumber(car.harga) * quantity);

  const [showPaymentMethods, setShowPaymentMethods] = useState(false);

  const handleBuyNowClick = () => {
    setShowPaymentMethods(!showPaymentMethods);
  };

  const [showBankTransfer, setShowBankTransfer] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);

  const handleBankTransferClick = () => {
    setShowBankTransfer(!showBankTransfer);
  };

  const handleCreditCardClick = () => {
    setShowCreditCard(!showCreditCard);
  };
  return (
    <div className="px-5 lg:px-20 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="overflow-hidden">
          <div className="flex items-center gap-2">
            <Link to="/">
              <h1 className="text-gray-500 hover:text-orange-300">Home</h1>{" "}
            </Link>
            <img src="/img/right-arrow.png" alt="arrow" className="w-3 h-3" />
            <h1 className="text-medium capitalize font-semibold">Transaksi</h1>
          </div>
          <img src={car.image} alt={car.name} className="w-full mt-32" />
        </div>
        <div className="h-screen overflow-y-auto no-scrollbar">
          <div className="space-y-5 md:p-4 mb-4">
            <h1 className="text-3xl font-bold">{car.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              odit eaque id dolorem modi distinctio?
              <Link to={`/detail/${car.id}`}>
                <p className="text-blue-500 underline">Lihat Detail</p>
              </Link>
            </p>
            <h5 className="font-bold text-2xl text-green-950">{car.harga}</h5>
            <hr />
            <Alamat />
            <hr />
            <div className="space-y-5">
              <h1 className="font-semibold text-xl">Quantity</h1>
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="flex gap-5 items-center">
                    <button
                      onClick={handleDecrease}
                      className="px-3 py-1 bg-red-500 text-white rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleChange}
                      className="w-16 text-center border border-gray-300 rounded"
                    />
                    <button
                      onClick={handleIncrease}
                      className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <h1 className="font-bold">Total :</h1>
                  <p>{totalPrice}</p>
                </div>
              </div>
            </div>
            <hr />
            {showPaymentMethods && (
              <div className="space-y-5 mt-5">
                <h1 className="font-semibold text-xl">Payment Methods</h1>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg">Bank Transfer</h1>
                    <button onClick={handleBankTransferClick}>
                      <img
                        src="/img/right-arrow.png"
                        alt="arrow"
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          showBankTransfer ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 space-y-3 ${
                      showBankTransfer ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <Bank />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg">Kartu Debit</h1>
                    <button onClick={handleCreditCardClick}>
                      <img
                        src="/img/right-arrow.png"
                        alt="arrow"
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          showCreditCard ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 space-y-3 ${
                      showCreditCard ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <Debit />
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-4 float-right mt-4 ">
              <button
                onClick={handleBuyNowClick}
                className="bg-[#ff7803] font-bold text-white px-4 py-2 rounded-full w-32 hover:bg-green-500 hover:text-white"
              >
                {showPaymentMethods ? "OK" : "Buy Now"}
              </button>
              {showPaymentMethods ? (
                <button
                  onClick={handleBuyNowClick}
                  className="bg-white border font-bold text-green-950 px-4 py-2 rounded-full w-32 hover:bg-red-500 hover:text-white"
                >
                  cancel
                </button>
              ) : (
                <Link to="/">
                  <button className="bg-white border font-bold text-green-950 px-4 py-2 rounded-full w-32 hover:bg-red-500 hover:text-white">
                    cancel
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
