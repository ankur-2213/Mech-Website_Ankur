import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../../styles";
import { experiences } from "../../../constants";
import { SectionWrapper } from "../../../hoc";
import { textVariant } from "../../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "white",
        color: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain stroke-red-500'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-red-900 text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
  {experience.points.map((point, index) => (
    <li
      key={`experience-point-${index}`}
      className='text-white-100 text-[14px] pl-1 tracking-wider'
    >
      <span dangerouslySetInnerHTML={{ __html: point }} />
    </li>
  ))}
</ul>

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Why Welding Research?
        </p>
        {/* <h2 className={`${styles.sectionHeadText} text-center`}>
        Advancing Welding for a Stronger Future
        </h2> */}
      </motion.div>

      <div className='mt-5 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
