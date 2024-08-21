import Lottie, { LottieRefCurrentProps } from "lottie-react";
import cactusAnimation from "../assets/cactus.json";
import { useEffect, useRef } from "react";

const Hero = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5)
      lottieRef.current.playSegments([1, 100], true)
    }
  }, [lottieRef]);

  return (
    <div className="mx-auto container p-6 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        <span className="block">Slow and Steady Growth</span>
        <span className="block text-amber-500">With minimum effort.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <Lottie animationData={cactusAnimation} lottieRef={lottieRef as any} loop={false} className="cactus" />
      </div>
    </div>
  );

}

export default Hero;
