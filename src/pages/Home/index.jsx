import { Booking } from "../../components/Booking";
import { Brands } from "../../components/Brands";
import { CarList } from "../../components/Carlist";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { Navbar } from "../../components/Navbar";
import { Promotion } from "../../components/Promotion";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <Promotion />
      <div id="booking">
        <Booking />
      </div>
      <div id="car-list">
        <CarList />
      </div>
      <Brands />

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};
