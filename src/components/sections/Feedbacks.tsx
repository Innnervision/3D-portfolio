import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { styles } from "../../constants/styles";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

// Motion Variants
const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: "spring" | "tween" | "inertia",
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// Hook for restarting animation
const useRestartAnimation = (duration: number) => {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("hidden").then(() => {
        controls.start("show");
      });
    }, duration + 20000); // Restart 20 seconds after animation completion

    return () => clearInterval(interval);
  }, [controls, duration]);

  return controls;
};

// Letter component for individual letter animation
const Letter: React.FC<{ letter: string; delay: number }> = ({ letter, delay }) => (
  <motion.span
    variants={fadeIn("", "spring", delay, 0.05)}
    initial="hidden"
    animate="show"
    className="inline-block"
  >
    {letter}
  </motion.span>
);

// FeedbackCard component
const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const letters = testimonial.split("");

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
      className="bg-dark-red xs:w-[320px] w-full rounded-3xl p-10"
    >
      <p className="text-[48px] font-black text-white">"</p>

      <div className="mt-1">
        <p className="text-[18px] tracking-wider text-white">
          {letters.map((letter, i) => (
            <Letter key={i} letter={letter} delay={i * 0.05} />
          ))}
        </p>

        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-[16px] font-medium text-white">
              <span className="dark-red-text-gradient">@</span> {name}
            </p>
            <p className="text-secondary mt-1 text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <motion.img
            src={image}
            alt={`feedback_by-${name}`}
            className="h-10 w-10 rounded-full object-cover"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Feedbacks component
const Feedbacks = () => {
  const duration = 5000; // Total duration for each animation cycle
  const controls = useRestartAnimation(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("hidden").then(() => {
        controls.start("show");
      });
    }, duration + 2000); // Restart 20 seconds after animation completion

    return () => clearInterval(interval);
  }, [controls, duration]);

  return (
    <div className="bg-dark-red-light mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>

      <style>
        {`
          .bg-dark-red {
            background-color: #004040; /* Dark red background color */
          }

          .bg-dark-red-light {
            background-color: #104020; /* Lighter dark red background color */
          }

          .dark-red-text-gradient {
            background: linear-gradient(to right, #000000, #909090);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default Feedbacks;
