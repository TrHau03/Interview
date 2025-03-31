import { useCallback, useState } from "react";

export const useProdCommand = () => {
  const [isSide, setIsSide] = useState(false);

  const toggleSide = useCallback(() => {
    setIsSide((prev) => !prev);
  }, []);

  return {
    isSide,
    toggleSide,
  };
};
