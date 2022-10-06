import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ankitluthra2001@gmail?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    md:max-w-7xl px-10 justify-evenly mx-auto  items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-8 mt-32">
        <div className="space-y-4">
        <motion.div
          initial = {{x: 100, opacity: 0}}
          whileInView = {{x: 0, opacity: 1}}
          transition = {{duration: 1.5}}
          viewport = {{once: true}}
          className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a href="tel:+91 9891776727" className="text-xl md:text-2xl">
              {pageInfo?.phoneNumber}
            </a>
          </motion.div>

          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a
              href="mailto:sheetalluthra2270@gmail.com"
              className="text-xl md:text-2xl"
            >
              {pageInfo?.email}
            </a>
          </div>

          <motion.div
          initial = {{x: -100, opacity: 0}}
          whileInView = {{x: 0, opacity: 1}}
          transition = {{duration: 1.5}}
          viewport = {{once: true}}
          className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.address}</p>
          </motion.div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-90 md:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              required
              className="ContactInput w-1/2 rounded-tl-lg"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              required
              className="ContactInput w-1/2 rounded-tr-lg"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="ContactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            required
            className="ContactInput"
          />
          <button
            className="bg-[#F7AB0A] p-3 rounded-b-lg text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
