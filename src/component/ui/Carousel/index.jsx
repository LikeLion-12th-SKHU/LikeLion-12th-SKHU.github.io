import { useState } from 'react';
import './index.css';
import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
const Carousel = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 === content.length ? 0 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) =>
      currentIndex === 0 ? content.length - 1 : prev - 1
    ),
      [];
  });
  const handleDragEnd = useCallback(
    (event, info) => {
      if (info.offset.x < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  const changeX = (index) => {
    if (index === currentIndex) {
      return 0;
    }
    if (index > currentIndex) {
      return 50;
    }
    return -50;
  };
  return (
    <div className="carousel">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AnimatePresence>
          {content.map((item, index) => (
            <motion.img
              key={index}
              src={item.img}
              drag="x"
              style={{
                display: index === currentIndex ? 'block' : 'none',
                width: 280,
                cursor: 'pointer',
                height: 180,
              }}
              animate={{
                x: changeX(index),
                opacity: index === currentIndex ? 1 : 0,
              }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              onDragEnd={handleDragEnd}
              width={280}
              height={180}
            />
          ))}
        </AnimatePresence>
        <div className="indicator">
          {content.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
