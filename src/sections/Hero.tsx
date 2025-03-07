import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex justify-self-center my-3 lg:mt-6 py-1 px-2 bg-black rounded-full items-center gap-2">
        <p>Training Neurons</p>
        <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
      </div>

      <motion.div 
        className="absolute lg:relative lg:text-center left-1/2 top-[40%] lg:top-8 -translate-x-1/2 -translate-y-1/2"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.1}}
      >
        <h1 className="text-5xl tracking-tighter">Intelligence Engineering</h1>
      </motion.div>

      <motion.div 
  className="mt-[65%] lg:mt-10 w-full lg:w-fit mx-auto px-2 text-center lg:text-start flex flex-col gap-5"
  initial={{opacity: 0, y: 20}}
  animate={{opacity: 1, y: 0}}
  transition={{delay: 0.2}}
>
  <p className="text-lg">Systems Engineering student <span className="text-blue-500 hover:cursor-pointer"><a>@Mount Kenya University</a></span></p>
  <p className="text-lg">Founder and CEO <span className="text-blue-500 hover:cursor-pointer"><a>@EventIQ</a></span></p>
  <p className="text-lg">Technical Writer <span className="text-blue-500 hover:cursor-pointer"><a>@Medium</a></span></p>
  <p className="text-lg">Freelancer <span className="text-blue-500 hover:cursor-pointer"><a>@Upwork</a></span></p>
</motion.div>
    </>
  );
};

export default Hero;