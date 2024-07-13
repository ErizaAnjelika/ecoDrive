import { Link, useParams } from "react-router-dom";
import { carList } from "../../services/data";
import { useState } from "react";

export const DetailCar = () => {
  const { id } = useParams();
  const car = carList
    .flatMap((category) => category.cars)
    .find((car) => car.id === parseInt(id));

  const [mesinOpen, setMesinOpen] = useState(true);
  const [transmisiOpen, setTransmisiOpen] = useState(false);
  const [dimensiOpen, setDimensiOpen] = useState(false);
  const [suspensionOpen, setSuspensionOpen] = useState(false);
  const [fiturOpen, setFiturOpen] = useState(false);
  const [interiorOpen, setInteriorOpen] = useState(false);
  const [eksteriorOpen, setExteriorOpen] = useState(false);

  const toggleMesin = () => {
    setMesinOpen(!mesinOpen);
  };
  const toggleTransmisi = () => {
    setTransmisiOpen(!transmisiOpen);
  };
  const toggleDimensi = () => {
    setDimensiOpen(!dimensiOpen);
  };
  const toggleSuspension = () => {
    setSuspensionOpen(!suspensionOpen);
  };
  const toggleFitur = () => {
    setFiturOpen(!fiturOpen);
  };
  const toggleInterior = () => {
    setInteriorOpen(!interiorOpen);
  };
  const toggleEksterior = () => {
    setExteriorOpen(!eksteriorOpen);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-5 lg:px-10 py-10">
        <div className="flex items-center gap-2 md:px-4">
          <Link to="/">
            <h1 className="text-gray-500 hover:text-orange-300">Home</h1>{" "}
          </Link>
          <img src="/img/right-arrow.png" alt="arrow" className="w-3 h-3" />
          <h1 className="text-medium capitalize font-semibold">Detail</h1>
        </div>

        <div className="space-y-5 mt-5 md:p-4">
          <h1 className="text-3xl font-bold">{car.name}</h1>
          <p className="text-lg text-green-950 font-bold">{car.harga}</p>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src={car.image} alt={car.name} className="w-full h-full" />
            <Link to={`/buy/${car.id}`}>
              <button className="font-semibold bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-10 py-5 lg:py-20">
        <div className="space-y-2 md:p-4">
          {/* mesin */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Mesin</h1>
              <button onClick={toggleMesin}>
                <img
                  src="/img/right-arrow.png"
                  alt="arrow"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    mesinOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`border-2 rounded-xl p-2 overflow-hidden transition-max-height duration-500 space-y-3 ${
                mesinOpen ? "max-h-screen" : "max-h-0 border-none"
              }`}
            >
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">Type mesin</h1>
                <p className="text-base font-semibold">
                  {car.detail.mesin.type}
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  Kapasitas mesin
                </h1>
                <p className="text-base font-semibold">{car.detail.mesin.cc}</p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  Tenaga maksimal
                </h1>
                <p className="text-base font-semibold">
                  {car.detail.mesin.tenaga}
                </p>
              </div>
            </div>
          </div>
          {/* transmisi */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Transmisi</h1>
              <button onClick={toggleTransmisi}>
                <img
                  src="/img/right-arrow.png"
                  alt="arrow"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    transmisiOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`border-2 rounded-xl p-2 overflow-hidden transition-max-height duration-500 space-y-3 ${
                transmisiOpen ? "max-h-screen" : "max-h-0 border-none"
              }`}
            >
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  Type transmisi
                </h1>
                <p className="w-80 text-right text-base font-semibold">
                  {car.detail.transmisi.type}
                </p>
              </div>
            </div>
          </div>
          {/* dimensi & kasitas */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Dimensi & kapasitas</h1>
              <button onClick={toggleDimensi}>
                <img
                  src="/img/right-arrow.png"
                  alt="arrow"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    dimensiOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`border-2 rounded-xl p-2 overflow-hidden transition-max-height duration-500 space-y-3 ${
                dimensiOpen ? "max-h-screen" : "max-h-0 border-none"
              }`}
            >
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">panjang</h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.dimensi.Panjang}
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">lebar</h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.dimensi.Lebar}
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">tinggi</h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.dimensi.Tinggi}
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  tampat duduk
                </h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.kapasitas.penumpang} seater
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">Bagasi</h1>
                <p className="w-80 text-right text-base font-semibold">
                  {car.detail.kapasitas.bagasi}
                </p>
              </div>
            </div>
          </div>
          {/* suspension */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Suspensi</h1>
              <button onClick={toggleSuspension}>
                <img
                  src="/img/right-arrow.png"
                  alt="arrow"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    suspensionOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`border-2 rounded-xl p-2 overflow-hidden transition-max-height duration-500 space-y-3 ${
                suspensionOpen ? "max-h-screen" : "max-h-0 border-none"
              }`}
            >
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  Suspensi Depan
                </h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.Suspension.front}
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  Suspensi Belakang
                </h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.Suspension.rear}
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">Rem Depan</h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.Suspension.remDepan}
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  Rem Belakang
                </h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.Suspension.remBelakang}
                </p>
              </div>
            </div>
          </div>
          {/* fitur */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Fitur Tambahan</h1>
              <button onClick={toggleFitur}>
                <img
                  src="/img/right-arrow.png"
                  alt="arrow"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    fiturOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            <div
              className={`border-2 rounded-xl p-2 overflow-hidden transition-max-height duration-500 space-y-3 ${
                fiturOpen ? "max-h-screen" : "max-h-0 border-none"
              }`}
            >
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  Mode berkendara
                </h1>
                <p className="text-right text-base font-semibold">
                  {car.detail.fitur.mode}
                </p>
              </div>
              <hr />
              <div className="text-gray-600 flex justify-between items-center">
                <h1 className="text-lg font-semibold capitalize">
                  Fitur lainnya
                </h1>
                <p className="text-base font-medium">
                  {car.detail.fitur.lainnya.map((item) => (
                    <p>{item}</p>
                  ))}
                </p>
              </div>
              <hr />
              {/* interior & ekterior */}
              <div className="grid grid-cols-2 gap-5">
                {/* interior */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold capitalize">
                      interior
                    </h1>
                    <button onClick={toggleInterior}>
                      <img
                        src="/img/right-arrow.png"
                        alt="arrow"
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          interiorOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <hr />
                  <div
                    className={`overflow-hidden transition-max-height duration-500 space-y-3 ${
                      interiorOpen ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="text-gray-600 flex items-center justify-between gap-2">
                      <h1 className="text-base font-semibold">Material jok</h1>
                      <p>{car.detail.fitur.interior.material}</p>
                    </div>
                    <div className="text-gray-600 flex flex-col gap-2">
                      <h1 className="text-base font-semibold">Keselamatan</h1>
                      <h5>
                        {car.detail.fitur.interior.fitur.map((item) => (
                          <p>{item}</p>
                        ))}
                      </h5>
                    </div>
                  </div>
                </div>
                {/* eksterior */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold capitalize">
                      eksterior
                    </h1>
                    <button onClick={toggleEksterior}>
                      <img
                        src="/img/right-arrow.png"
                        alt="arrow"
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          eksteriorOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <hr />
                  <div
                    className={`overflow-hidden transition-max-height duration-500 space-y-3 ${
                      eksteriorOpen ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="text-gray-600 flex items-center justify-between gap-2">
                      <h1 className="text-base font-semibold">Velg</h1>
                      <p>{car.detail.fitur.exterior.velg}</p>
                    </div>
                    <div className="text-gray-600 flex items-center justify-between gap-2">
                      <h1 className="text-base font-semibold">Lampu</h1>
                      <p>{car.detail.fitur.exterior.lampu}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
