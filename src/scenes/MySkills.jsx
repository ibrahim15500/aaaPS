import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { skillList } from "../utils/skillesData";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  console.log(skillList);
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
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
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I have expertise in this technology HTML5, CSS3, javascript
            (Es6),React js,React Router Dom,Redux Toolkit, Axios,React Hook
            Form, Formik,Yup,Style Component,React Query,Next Js,Next
            Auth,Tailwind CSS Bootstrap,Chakra Ui,Vue js,Vue
            Router,Vuex,Pinia,Prime Vue,Git,Bitbucket,
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full  before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

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
                <p className="font-playfair font-semibold text-3xl flex justify-center mt-3">
                  < skill.icon className="" />
                </p>
                <p className="font-playfair font-semibold text-5xl mt-3">
                  {skill.name}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
