import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

var poojaResume = "/PoojaTemp.pdf";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hey, The name's ${pageInfo?.name}`,
      "Women-who-loves-Humans ",
      "*(But with Humanity)",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative object-cover w-32 h-32 rounded-full mx-auto"
        src={urlFor(pageInfo.HeroImage).url()}
        alt="Ankit Luthra"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[13px]  md:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl lg:text-5xl font-semibold px-5 md:px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-4">
          <Link href="#about">
            <button className="herobutton">About</button>
          </Link>
          <Link href="#experience">
            <button className="herobutton">Experience</button>
          </Link>
          <Link href="#awards">
            <button className="herobutton">Awards</button>
          </Link>
          <Link href="#newspaper">
            <button className="herobutton">NewsPaper Clips</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
