import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import Image from "next/image";
import { Link } from 'next-view-transitions';

export const HerobannerServices = () => {
  return (
    <Section size="9/10" className="mt-[150px] md:mt-[170px]">
      <AnimateContainer className="flex items-center bg-third rounded-[60px] md:pl-24 py-24 justify-between overflow-hidden relative">
        <div className="flex z-10 flex-col md:items-start md:text-start text-center">
          <h1 className="uppercase max-w-4xl md:text-5xl text-3xl 2xl:max-w-3xl lg:max-w-2xl font-medium text-primary leading-1 items-center">
            Clean'o : bien plus qu'un{" "}
            <span className="text-secondary">Service nettoyage</span>
          </h1>
          <div className="flex flex-col mt-4 text-center lg:text-start items-center md:items-start">
            <p className="uppercase text-primary font-medium text-lg 2xl:max-w-[70%] max-w-[85%] lg:max-w-[60%] mx-auto md:mx-0">
              Vous êtes fatigué de gérer des prestataires peu fiables, avec des
              retards et un travail peu soigné ?
            </p>
            <Link
              href="/contact"
              className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
            >
              audit gratuit
            </Link>
          </div>
        </div>

        <div className="flex opacity-30 z-1 items-end absolute bottom-0 right-0 lg:opacity-100 2xl:relative 2xl:-bottom-24 lg:max-w-[45%]">
          <Image
            src="/assets/images/home/femme_homme.png"
            alt=""
            width={700}
            quality={100}
            height={0}
            className="md:max-h-[600px] md:flex hidden"
          ></Image>
        </div>
      </AnimateContainer>
    </Section>
  );
};
