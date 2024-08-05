import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const serviceCardStyles = {
  backgroundColor: "#006400", // Deep green background color
  animation: "vibrate 0.5s linear infinite, changeBgColor 4s linear infinite" // Adjusted duration for smoother transition
};

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div style={serviceCardStyles} className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
        ))}
      </div>

      <style>
        {`
          @keyframes vibrate {
            0% { transform: translate(0); }
            25% { transform: translate(1px, -1px); }
            50% { transform: translate(-1px, 1px); }
            75% { transform: translate(1px, 1px); }
            100% { transform: translate(-1px, -1px); }
          }

          @keyframes changeBgColor {
            0% { background-color: #640000 } /* Light green */
            50% { background-color: #006400; } /* Deep green */
            100% { background-color: #640000; } /* Light green */
          }
        `}
      </style>
    </>
  );
};

export default SectionWrapper(About, "about");
