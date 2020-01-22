import { useState, useEffect } from "react";

export const useFadeIn = () => {
  const [isHidden, setIsHidden] = useState(true);
  setTimeout(() => setIsHidden(false), 1000);

  return isHidden ? "hidden fadeIn" : "fadeIn";
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
