import { useState, useEffect } from "react";

export const useAnimateIn = animations => {
  const [isHidden, setIsHidden] = useState(true);
  setTimeout(() => setIsHidden(false), 1000);

  return `${isHidden ? "hidden" : ""} ${animations.join(" ")}`;
};

export const useSlideshow = (numSlides, delay) => {
  const [index, setIndex] = useState(0);

  let timeout,
    start,
    remaining = delay;

  useEffect(() => {
    resume();
  }, [index]);

  const pause = () => {
    clearTimeout(timeout);
    remaining -= Date.now() - start;
  };

  const resume = () => {
    // if (timeout) return;
    start = Date.now();
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIndex(prevIndex => (prevIndex + 1) % numSlides);
      console.log(remaining);
    }, remaining);
  };

  return { index, setIndex, resume, pause };
};
