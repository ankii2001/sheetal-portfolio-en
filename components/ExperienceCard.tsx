import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center md:space-y-3 flex-shrink-0 w-[350px] md:w-[600px] md:h-[460px]
    snap-center bg-[#292929] py-4 px-10 md:hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[110px] xl:h-[110px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{experience.company}</p>
        <p className="uppercase py-3 text-gray-300">
          More than {experience.duration} years
        </p>

        <ul className="h-52 list-disc list-inside space-y-4 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 text-md p-1 ">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
