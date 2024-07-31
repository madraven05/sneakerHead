import React from "react";
import Hero from "../components/Hero";
import withBounceAnimation from "../components/hocs/withBounceAnimation";
import { ShoeBox } from "../components/ShoeBox";
import RotateWithScroll from "../components/RotateWithScroll";
import { NikeAirJordanBWHT } from "../components/shoes/NikeAirJordanBWHT";

const Home: React.FC = () => {
  const introHeroText = (
    <>
      <h1 className="text-6xl col-span-2">Hey, there sneakerhead!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad,
        aliquid magni rerum assumenda quos dolorem eligendi alias, porro quidem
        unde exercitationem cupiditate molestiae provident, beatae temporibus
        quod qui? Consequuntur?
      </p>
    </>
  );

  const saleHeroText = (
    <>
      <h1 className="text-6xl col-span-2">Summer Sale is here!</h1>
      <p>
        Get ready to step up your style game with unbeatable deals on the latest
        kicks. Whether you're a sneakerhead or just looking for a fresh pair of
        shoes, we've got you covered with discounts up to <span className="text-red-300 font-bold">50% off!</span>
      </p>
    </>
  );

  const IntroHeroModel = withBounceAnimation(ShoeBox);
  return (
    <div>
      <Hero
        tailwindBg="bg-red-300"
        text={introHeroText}
        model={
          <>
            <RotateWithScroll>
              <IntroHeroModel
                castShadow
                scale={2}
                bounceFromPos={[0, 0.4, 0]}
                bounceHeight={-0}
                position={[0, -0.2, 0]}
                // rotation={[0.1, 2, -0.1]}
                rotation={[0, 0, 0]}
              />
            </RotateWithScroll>
          </>
        }
      />
      <Hero
        tailwindBg="bg-blue-300"
        text={saleHeroText}
        model={
          <>
            <RotateWithScroll isEnter={false}>
              <NikeAirJordanBWHT
                scale={0.04}
                rotation={[0, Math.PI, 0]}
                position={[0, -0.1, 0]}
              />
            </RotateWithScroll>
          </>
        }
      />
    </div>
  );
};

export default Home;
