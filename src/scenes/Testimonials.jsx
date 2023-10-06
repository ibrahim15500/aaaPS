import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import cpt from "../assets/Cpflogo.png";
import dsp from "../assets/dsp-logo.png";
import pT from "../assets/pT.png";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-white">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's our satisfied clients come from various sectors, including:
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8 mt-[40px]">
        <motion.div
          className=" bg-blue  p-16 mt-[10px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="w-full flex justify-center">
            <img src={cpt} alt="logo" className="w-[100px]" />
          </div>
          <p className="font-playfair text-6xl">“ </p>
          <p className="text-center text-xl">Charoen Pokphand</p>
        </motion.div>

        <motion.div
          className=" bg-red  p-16 mt-[10px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="w-full flex justify-center">
            <img src={dsp} alt="logo" className="w-[100px]" />
          </div>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">Daman Support Programme</p>
        </motion.div>

        <motion.div
          className="bg-yellow  p-16 mt-[10px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="w-full flex justify-center">
            <img src={pT} alt="logo" className="w-[100px]" />
          </div>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">Platform Turizm</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
