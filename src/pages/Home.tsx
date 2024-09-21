import React from "react";
import Hero from "../components/Hero";
import withBounceAnimation from "../components/hocs/withBounceAnimation";
import { ShoeBox } from "../components/ShoeBox";
import RotateWithScroll from "../components/RotateWithScroll";
import { NikeAirJordanBWHT } from "../components/shoes/NikeAirJordanBWHT";

const Home: React.FC = () => {

  return (
    <div className="flex flex-col w-full h-full min-h-screen">
      <Hero/>
      {/* <section className="min-h-screen bg-white"/> */}
    </div>
  );
};

export default Home;
