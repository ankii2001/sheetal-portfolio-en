import React from "react";
import { motion } from "framer-motion";
import { Paper } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  papers: Paper[];
};

function Papers({ papers }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-2xl">
        NewsPaper Cutouts
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 h-screen"
      >
        {papers?.map((paper, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={paper._id}
            className="w-screen flex-shrink-0 snap-always snap-center flex flex-col space-y-4 items-center justify-center p-8 md:p-52"
          >
            <motion.img
              initial={{ y: -180, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(paper?.image).url()}
              className="w-full h-auto md:w-8/12 md:h-auto rounded-lg"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[36%] bg-[#F7AB0A]/10 left-0 h-[400px] md:h-[280px] -skew-y-12" />
    </motion.div>
  );
}

export default Papers;
