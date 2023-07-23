import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from "../src/styles/animatedTitleH2.module.css";

const AnimatedTitleH2 = () => {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      controls.start({
        opacity: 1,
        x: [0, 30, -30, 0], // Deslocamento para a esquerda, para a direita e volta para a posição original
        scale: [0.1, 1], // Inicia com 0.5 (pequeno) e termina com 1 (normal)
        transition: { duration: 0.7, delay: 0.2 }, // Define a duração da animação e um pequeno atraso
      });
    }
  }, [isMounted, controls]);

  return (
    <motion.h2
      className={styles.titleAnimated}
      initial={{ opacity: 0, scale: 0.5, x: 0 }} // Define a posição inicial pequena
      animate={controls}  // Define as animações criadas no useEffect
      style={{
        background: 'linear-gradient(to right, #fb923c, #ffffff)',
        color: 'transparent',
        display: 'inline-block',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
      }}
    >
      Get to know me a little more...
    </motion.h2>
  );
};

export default AnimatedTitleH2;
