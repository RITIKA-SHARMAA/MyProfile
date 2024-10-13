import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { myPhoto, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../highOrderCompo";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <div id="about" >
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}> Overview </h2>
            </motion.div>

            <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start mt-10'>
                {/* Image frame container */}
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] lg:mr-20'
                >
                    Hi, I’m Ritika Sharma, a Computer Science student with a passion for
                    creating meaningful technology solutions. My journey in tech began with a
                    curiosity to build websites and mobile apps, and since then, I’ve gained
                    experience in both front-end and back-end development.
                    I enjoy working across the full stack to deliver solutions that are both
                    functional and user-friendly.<br/><br/>

                    Let’s work together to bring your vision to life !!!
                </motion.p>

                <div className='lg:w-1/3 w-full flex justify-center lg:justify-start'>
                    <div
                        className='w-[250px] h-[300px] md:w-[300px] md:h-[350px] rounded-3xl shadow-lg p-1'> {/* Increased size here */}
                        <img
                            src={myPhoto[0].icon}
                            alt={myPhoto[0].title}
                            className='w-full h-full object-cover rounded-lg shadow-md '
                        />
                    </div>
                </div>
            </div>

            {/* Service Cards */}
            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
