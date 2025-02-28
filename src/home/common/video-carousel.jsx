import { useState, useEffect, useCallback } from "react";

const images = [
  "/assets/video-carousel.png",
  "/assets/video-carousel.png",
  "/assets/video-carousel.png",
  // Add more images as needed
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  return (
    <div className="relative mt-6   mx-auto">
      <div
        className="relative aspect-[16/9] h-[388.47px] w-full rounded-lg overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Image */}
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm z-20 hover:bg-white/40 transition-colors"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm z-20 hover:bg-white/40 transition-colors"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-8 flex items-center px-4 z-20">
          <div className="w-full bg-white/30 h-[2px] rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 ease-in-out"
              style={{
                width: `${((currentIndex + 1) / images.length) * 100}%`,
              }}
            />
          </div>
          <span className="text-white text-sm ml-4">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
