import { useState } from 'react';
import './index.css';
const Carousel = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 === content.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      currentIndex === 0 ? content.length - 1 : prev - 1
    );
  };
  const handleClickButton = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="carousel">
      <img
        key={currentIndex}
        src={content[currentIndex]?.img}
        width={280}
        height={180}
      />
      <div className="left" onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </div>
      <div className="right" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
      <div className="indicator">
        {content.map((_, index) => (
          <div
            key={index}
            onClick={() => handleClickButton(index)}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
