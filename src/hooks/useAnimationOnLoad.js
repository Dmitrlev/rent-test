import {useEffect, useState} from "react";

export const useAnimationOnLoad = (delayTime = 0) => {

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, delayTime);

    return () => clearTimeout(timeout);
  }, [delayTime]);

  return isAnimated;
};