"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Der Innovations" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-orange-400"
      >
        <span className="font-extrabold text-orange-400">DER INNOVATION</span>{" "}
        is a forward-looking company focused on building products & solutions
        that are needed for the modern era. What makes us{" "}
        <span className="font-extrabold text-orange-400">unique</span> is our{" "}
        <span className="font-extrabold text-orange-400">integrity</span> to
        keep ancient African wisdom in{" "}
        <span className="font-extrabold text-orange-400">harmony</span> with the
        modern science & tech!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
