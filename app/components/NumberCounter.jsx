import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counting = ({
  startValue = 100,
  endValue = 250,
  completionTime = 0.5,
}) => {
  const [seconds, setSeconds] = useState(startValue);
  const { ref, inView } = useInView();
  const intervalRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const increment =
        (endValue - startValue) / ((completionTime * 1000) / 10); // Calculate increment per interval

      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds >= endValue) {
            clearInterval(intervalRef.current);
            return endValue;
          }
          return prevSeconds + increment;
        });
      }, 10); // Interval duration set to 10 milliseconds (0.01 seconds)
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [startValue, endValue, completionTime, inView]);

  const variants = {
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5 }}
        className="font-bold text-7xl"
      >
        {Math.floor(seconds)}
      </motion.div>
    </div>
  );
};

export default Counting;
