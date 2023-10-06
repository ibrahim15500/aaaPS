import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { skillList } from "../utils/skillesData";

const Services = () => {
  return (
    <section id="services" className="pt-10 pb-24">
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          OUR <span className="text-yellow">SERVICES</span>
        </p>
        <LineGradient width="w-1/3" />
      </motion.div>
      {/* services */}
      {/* SKILLS */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-16 gap-32">
        {/* EXPERIENCE */}
        {skillList.map((skill) => (
          <motion.div
            key={skill._id}
            className=" "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative text-center h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-2xl mt-3 text-yellow">
                  {skill.name}
                </p>
                <p className="font-playfair  text-lg flex justify-center mt-3">
                  {skill.para}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
