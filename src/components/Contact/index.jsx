import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Contact = () => {
  return (
    <div className="w-full mt-20">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg">
          Our customer services team is always happy to answer any questions
        </p>
      </div>
      <div className="mt-10">
        <MapContainer
          center={[-6.2, 106.816666]} // Koordinat pusat untuk Jakarta, Indonesia
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-6.2, 106.816666]}>
            {" "}
            // Koordinat marker untuk Jakarta
            <Popup>Jakarta, Indonesia.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="mt-10 px-5 lg:px-96">
        <h1 className="text-2xl font-bold">Contact details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
          <div className="bg-green-900 p-6 rounded-lg space-y-5">
            <h1 className="text-lg font-bold text-white">Head Office</h1>
            <p className="text-white">Jl. Pangeran Antasari No. 1</p>
            <p className="text-white">12346, Jakarta</p>
            <p className="text-white">Indonesia</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-gray-500 p-6 rounded-lg">
              <p className="text-white">+62 21 2345678</p>
              <h1 className="text-base text-white">call us</h1>
            </div>
            <div className="bg-gray-500 p-6 rounded-lg">
              <p className="text-white">qI6pJ@example.com</p>
              <h1 className="text-base text-white">send email</h1>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-5">
          <h1 className="text-2xl font-bold">Send your message</h1>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-2 rounded-lg px-5 placeholder:text-gray-400 placeholder:font-semibold focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 rounded-lg px-5 placeholder:text-gray-400 placeholder:font-semibold focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full py-2 rounded-lg px-5 placeholder:text-gray-400 placeholder:font-semibold focus:outline-none"
              rows="3"
            ></textarea>
            <button className="w-full bg-[#ff7803] text-white px-8 py-2 rounded-lg capitalize font-bold text-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
