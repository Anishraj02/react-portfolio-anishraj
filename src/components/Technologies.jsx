import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    intial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <section id="technologies" className="py-20">
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 1}}
            className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity:0, x: -100}}
            transition={{duration:  1}}
            className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            variants={iconVariants(2.5)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
            <RiReactjsLine className="text-5xl text-cyan-400"/>
          </motion.div>

          <motion.div 
            variants={iconVariants(3)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
            <TbBrandNextjs className="text-5xl"/>
          </motion.div>

          <motion.div 
            variants={iconVariants(5)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
            <SiMongodb className="text-5xl text-green-500"/>
          </motion.div>

          <motion.div 
            variants={iconVariants(2)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
            <FaJava className="text-5xl"/>
          </motion.div>

          <motion.div 
            variants={iconVariants(6)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
            <FaNodeJs className="text-5xl text-green-500"/>
          </motion.div>

          <motion.div 
            variants={iconVariants(4)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
            <SiJest className="text-5xl text-red-600"/>
          </motion.div>

          <motion.div 
            variants={iconVariants(7)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-700 p-4">
            <PiFileSql className="text-5xl text-sky-400"/>
          </motion.div>

        </motion.div>
    </div>
    </section>
  )
}

export default Technologies;