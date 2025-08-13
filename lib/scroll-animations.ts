import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
      delay: i, // control delay with `custom`
    },
  }),
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
      delay: delay, // control delay with `custom`
    },
  }),
};

// Stagger container for animating children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

// Default viewport settings for scroll animations
export const defaultViewport = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.1,
};
