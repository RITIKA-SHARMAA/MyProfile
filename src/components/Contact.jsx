import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../highOrderCompo";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
            variants={slideIn('left', "tween", 0.2, 1)}
            className="flex-[0.5] bg-black-100 p-6 rounded-2xl" // Reduced flex size and padding
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <div className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>LinkedIn</span>
              <a
                  href="https://www.linkedin.com/in/ritika-sharma-baba2626a" // Replace with your LinkedIn URL
                  className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'
                  target="_blank"
                  rel="noopener noreferrer"
              >
                ritika-sharma-baba2626a
              </a>
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>GitHub</span>
              <a
                  href="https://github.com/RITIKA-SHARMAA" // Replace with your GitHub URL
                  className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'
                  target="_blank"
                  rel="noopener noreferrer"
              >
                RITIKA-SHARMAA
              </a>
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Topmate</span>
              <a
                  href="https://topmate.io/ritika_sharma19" // Replace with your Topmate URL
                  className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'
                  target="_blank"
                  rel="noopener noreferrer"
              >
                ritika_sharma19
              </a>
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Email</span>
              <a
                  href="mailto:ritika.sharma0407@gmail.com" // Replace with your email
                  className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'
              >
                ritika.sharma0407@gmail.com
              </a>
            </label>

            <p className={styles.sectionSubText}>Also checkout:</p>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Instagram</span>
              <a
                  href="https://www.instagram.com/rensym04" // Replace with your Instagram URL
                  className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'
                  target="_blank"
                  rel="noopener noreferrer"
              >
                rensym04
              </a>
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Youtube</span>
              <a
                  href="https://www.youtube.com/@rbaworld9777" // Replace with your YouTube URL
                  className='bg-tertiary py-4 px-6 text-white rounded-lg font-medium'
                  target="_blank"
                  rel="noopener noreferrer"
              >
                rbaworld
              </a>
            </label>
          </div>
        </motion.div>

        <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
  )
}

export default SectionWrapper(Contact, "contact");
