// Status.jsx
import { useState, useEffect, useMemo } from 'react';

import close from "../../assets/img/comp/close.svg";
import img1 from "../../assets/img/comp/uni-1.png";
import img2 from "../../assets/img/comp/uni-2.png";
import img3 from "../../assets/img/comp/uni-3.png";
import img4 from "../../assets/img/comp/uni-4.png";

const Status = () => {
  const images = useMemo(
    () => [
      img1, img2, img3, img4
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0); // reset progress when image changes
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress < 100 ? prevProgress + 1 : 0);
    }, 30); // update progress every 30ms

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (!isClosed && window.scrollY > window.innerHeight * 0.4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  return (
    isVisible && (
      <div className="flex flex-col space-x-4 p-4 bg-rogue-500 bg-opacity-40 border border-off-white-50 border-opacity-40 rounded-[14px] m-[14px]">
        <button onClick={handleClose} className="self-end">
          <img 
            src={close}
            alt="close button"
          />
        </button>
        <div className="relative" style={{ margin: 0, padding: 0 }}>
          <div className='py-4'>
            
          </div>
          <div
            style={{ width: `${progress}%` }}
            className="absolute rounded  left-0 -mt-3 h-1 bg-off-white-50"
          />
          <img
            src={images[currentIndex]}
            alt={`Status ${currentIndex + 1}`}
            className="rounded-[10px] w-[260px] object-cover"
          />
        </div>
      </div>
    )
  )
};

export default Status;
