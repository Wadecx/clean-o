import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import Image from "next/image";
import { Link } from 'next-view-transitions';

export const HerobannerContact = () => {
  return (
    <Section size="9/10" className="mt-[150px] md:mt-[170px]">
      <AnimateContainer className="flex items-center bg-third rounded-[60px] md:pl-24 py-24 justify-between overflow-hidden relative">
        
        {/* TEXTE */}
        <div className="flex z-10 flex-col md:items-start md:text-start text-center w-full lg:w-[55%] xl:w-[50%] 2xl:w-[60%]">
          <h1 className="uppercase md:text-5xl text-3xl font-medium text-primary leading-tight">
            Besoin d'un services de nettoyage professionnel ?
            <span className="text-secondary">Contactez Clean'o ! </span>
          </h1>
          
          <div className="flex flex-col mt-4 text-center lg:text-start items-center md:items-start">
            <Link
              href="/nos-services"
              className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
            >
              nos services
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex opacity-30 z-1 items-end absolute bottom-0 right-0 lg:opacity-100 2xl:relative 2xl:-bottom-24 lg:max-w-[50%] 2xl:max-w-[80%]">
          <Image
            src="/assets/images/cleaning.png"
            alt=""
            width={900}
            quality={100}
            height={0}
            className="md:max-h-[600px] md:flex hidden"
          />
        </div>
      </AnimateContainer>
    </Section>
  );
};
