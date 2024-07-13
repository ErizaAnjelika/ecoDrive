import { useState, useEffect } from "react";
import "./style.css";
export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Kamu bisa menyesuaikan nilai scroll
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-30 px-5 lg:px-20 py-5 ${
        scroll ? "bg-blur" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-10" alt="logo" src="/img/logo.png" />
          <h1 className="text-xl font-bold">
            EcoDrive<span className="text-green-500">.</span>
          </h1>
        </div>

        <div className="hidden md:block lg:block">
          <ul className="flex items-center gap-8 p-2 text-lg font-semibold capitalize">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#car-list">All Cars</a>
            </li>
            <li>
              <a href="#contact">contact us</a>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden md:hidden">
          <button
            onClick={handleDropdown}
            className="block lg:hidden md:hidden text-3xl"
          >
            ☰
          </button>
          {openDropdown && (
            <div className="absolute right-5 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <ul className="flex flex-col gap-2 p-2 capitalize font-semibold">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#car-list">All Cars</a>
                </li>
                <li>
                  <a href="#contact">contact us</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
