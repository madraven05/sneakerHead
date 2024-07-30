import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import withBounceAnimation from "../components/hocs/withBounceAndRollAnimation";
import { ShoeBox } from "../components/ShoeBox";

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

  const IntroHeroModel = withBounceAnimation(ShoeBox);
  return (
    <div>
      <Hero
      tailwindBg="bg-red-300"
        text={introHeroText}
        model={
          <IntroHeroModel
            castShadow
            scale={2}
            bounceFromPos={[0, 0.4, 0]}
            bounceHeight={-0}
            position={[0.2, -0.27, 0]}
            rotation={[0.1, 2, -0.1]}
          />
        }
      />
    </div>
  );
};

export default Home;
