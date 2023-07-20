import { useEffect, useState } from "react";

const useIsmobile = () => {
  const [state, setState] = useState(window.innerWidth);
  const handleResize = (event) => setState(event.target.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return state < 763;
};

export default useIsmobile;
