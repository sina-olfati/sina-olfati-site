import React, { useEffect, useState } from "react";

export const useScrollScreen = () => {
  const [scrollDir, setScrollDir] = useState("up");
  const threshold = 20;
  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const scrolledMoreThanThreshold = (
      currentScrollYPosition: number
    ) =>
      Math.abs(
        currentScrollYPosition - previousScrollYPosition
      ) > threshold;

    const isScrollingUp = (
      currentScrollYPosition: number
    ) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(
        previousScrollYPosition > 0 &&
        currentScrollYPosition === 0
      ) &&
      !(
        currentScrollYPosition > 0 &&
        previousScrollYPosition === 0
      );

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (
        scrolledMoreThanThreshold(currentScrollYPosition)
      ) {
        const newScrollDirection = isScrollingUp(
          currentScrollYPosition
        )
          ? "down"
          : "up";
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0
            ? currentScrollYPosition
            : 0;
      }
    };

    const onScroll = () =>
      window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);
  return {
    scrollDir,
  };
};