import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const FloatingImages = () => {
  const images = [
    "/assets/images/float.svg",
    "/assets/images/float.svg",
    "/assets/images/float.svg",
    "/assets/images/float.svg",
    "/assets/images/float.svg",
  ];

  const hoverImages = [
    "/assets/images/uu.svg",
    "/assets/images/uu.svg",
    "/assets/images/uu.svg",
    "/assets/images/uu.svg",
    "/assets/images/uu.svg",
  ];

  const parentRef = useRef(null); // Reference to the parent div
  const [positions, setPositions] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (parentRef.current) {
      const { clientWidth, clientHeight } = parentRef.current;

      setPositions(
        images.map(() => ({
          x: Math.random() * (clientWidth - 64), // 64px accounts for image width
          y: Math.random() * (clientHeight - 64), // 64px accounts for image height
        }))
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (parentRef.current) {
        const { clientWidth, clientHeight } = parentRef.current;

        setPositions((prev) =>
          prev.map((pos, index) =>
            hoveredIndex === index
              ? pos
              : {
                  x: Math.random() * (clientWidth - 64),
                  y: Math.random() * (clientHeight - 64),
                }
          )
        );
      }
    }, 1000); // Move every 2 seconds

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <div ref={parentRef} className="relative w-full h-full overflow-hidden ">
      {positions.map((pos, index) => (
        <motion.img
          key={index}
          src={hoveredIndex === index ? hoverImages[index] : images[index]}
          className="absolute w-16 h-16 rounded-full shadow-lg"
          animate={hoveredIndex === index ? {} : { x: pos.x, y: pos.y }}
          transition={{ duration: 2, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ x: pos.x, y: pos.y }}
        />
      ))}
    </div>
  );
};

export default FloatingImages;
