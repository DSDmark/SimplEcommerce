import { useState, useEffect } from "react"

function useToggleNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(prev => !prev)
  }

  function handleClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        handleClose();
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [])

  return [isOpen, handleToggle, handleClose];
}

export default useToggleNavBar;
