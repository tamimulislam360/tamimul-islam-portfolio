import { useEffect, useState } from "react";
import { IoArrowUpCircle } from "react-icons/io5";

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 z-50 bg-accent-primary dark:bg-accent-secondary text-white p-3 rounded-full shadow-md"
          onClick={handleBackToTop}
        >
          <IoArrowUpCircle className="animate-bounce" size={24} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
