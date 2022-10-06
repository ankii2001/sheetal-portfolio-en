import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Awards from "../components/Awards";
import News from "../components/Papers";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Award, Paper, Social } from "../typings";
import { fetchPageInfoEnglish } from "../utils/fetchPageInfoEnglish";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPapers } from "../utils/fetchPapers";
import { fetchAwards } from "../utils/fetchAwards";
import { fetchSocial } from "../utils/fetchSocials";
// import { xyz } from "../components/Language";


// console.log(xyz);


var lang = "en";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  papers: Paper[];
  awards: Award[];
  socials: Social[];
};

// const Home: NextPage<Props> = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
const Home = ({ pageInfo, experiences, awards, papers, socials }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thin md:scrollbar scrollbar-track-gray-400/5
      scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>{pageInfo?.name}</title>
        <link rel="icon" href="/SheetalWhiteBG.png" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-always snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className=" snap-always snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-always snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="awards" className="snap-always snap-start">
        <Awards awards={awards} />
      </section>

      <section id="newspaper" className="snap-always snap-start">
        <News papers={papers} />
      </section>

      <section id="contact" className="snap-always snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-5 w-full pr-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-end"
        >
          <Link href="#hero">
            <p className="flex items-center cursor-pointer rounded-full bg-[#F7AB07]/80 p-2 animate-bounce">
              <ChevronDoubleUpIcon className="h-8 w-8 font-bold text-white" />
            </p>
          </Link>
        </motion.div>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps : GetServerSideProps<Props> = async () => {

  const pageInfo: PageInfo = await fetchPageInfoEnglish();
  const experiences: Experience[] = await fetchExperiences();
  const papers: Paper[] = await fetchPapers();
  const awards: Award[] = await fetchAwards();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      papers,
      awards,
      socials,
    },
  };
};