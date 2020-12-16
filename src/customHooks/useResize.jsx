import { useEffect, useState } from "react";

export const useResize = (size) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, [windowWidth]);
  return windowWidth > size;
};
