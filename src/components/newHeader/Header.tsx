import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import SplitText from "../Bits/SplitText/SplitText";
import { easings } from '@react-spring/web';

import RotatingText from "../Bits/RotatingText/RotatingText";
import AnimatedContent from "../Bits/AnimatedContent/AnimatedContent";
import NoteLegCo from "../NoteLegCo/NoteLegCo";

type HeaderProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
};

export default function HeaderComponent({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: HeaderProps) {

  const location = useLocation()

  const handleAnimationComplete = () => {
    console.log("animated")
  }

  return (
    <header
      className= { location.pathname === "/"? "header-component" : "header-note"}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >


      <Navbar></Navbar>

      {location.pathname === "/" &&

        (
          <div className="header-title header-content">

            <SplitText
              text={title}
              className="text-2xl font-semibold text-center"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing={easings.easeOutCubic}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            <div className="header-subtitle">

              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >


                <div className="row">
                  <p className="col-6 ml">CONTINUA A </p>
                  <RotatingText
                    texts={['COMBATTERE', 'CREDERCI', 'MIGLIORARE', 'CONQUISTARE']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg rota col-6"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </AnimatedContent>

            </div>

          </div>
        )}

    </header>
  );
}
