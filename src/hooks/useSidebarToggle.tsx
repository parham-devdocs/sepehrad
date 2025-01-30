import { useEffect, useState } from "react";

const useSidebarToggle = () => {
  const [mobileMode, setMobileMode] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileMode(window.innerWidth < 450);
    };

    // Set up the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run effect only on mount and unmount

  return { mobileMode };
};

export default useSidebarToggle;
