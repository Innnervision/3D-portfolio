import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";



const Hero = () => {
  return (
    
    <section className="relative mx-auto h-screen w-full overflow-hidden bg-[rgba(0,100,255,0.25)]">
      <div className="absolute inset-0 top-[120px] mx-auto max-w-7xl px-6 sm:px-16 py-10 flex flex-row items-start gap-5">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-red-600 animate-pulse" /> {/* Red spark effect */}
          <div className="violet-gradient h-40 w-1 sm:h-80 mt-4 sm:mt-0" />
        </div>

        <div className="text-center sm:text-left">
          <motion.h1
            className={`${styles.heroHeadText} text-4xl sm:text-6xl font-bold mb-4 text-Yellow-50`}
            animate={{
              y: [-2, 2, -2], // Y-axis vibration animation
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            Hi, I'm <span className="text-red-900">{config.hero.name}</span> {/* Green color */}
          </motion.h1>
          <p className={`${styles.heroSubText} text-lg sm:text-xl leading-relaxed`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>
       
      {/* Lazy load ComputersCanvas */}
      
      <div className="absolute bottom-32 w-full flex items-center justify-center">
        <a href="#about">
          <div className="border-green-600 flex h-16 w-10 items-center justify-center rounded-full border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-blue-800 h-3 w-3 rounded-full"
            />
           {/* Earth canvas */}
          </div>
        </a>
        
      </div>
    </section>
  );
};

export default Hero;
