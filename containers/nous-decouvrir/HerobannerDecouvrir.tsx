import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import Image from "next/image";
import { Link } from 'next-view-transitions';

export const HerobannerDecouvrir = () => {
  return (
    <Section size="9/10" className="mt-[150px] md:mt-[170px]">
      <AnimateContainer className="flex items-center bg-third rounded-[60px] md:pl-24 py-24 justify-between overflow-hidden relative">
        
        {/* TEXTE */}
        <div className="flex z-10 flex-col md:items-start md:text-start text-center w-full lg:w-[55%] xl:w-[50%] 2xl:w-[60%]">
          <h1 className="uppercase md:text-5xl text-3xl font-medium text-primary leading-tight">
            une équipe de passionnée à<br/>
            <span className="text-secondary">votre écoute</span> !
          </h1>
          
          <div className="flex flex-col mt-4 text-center lg:text-start items-center md:items-start">
            <p className="uppercase text-primary font-medium text-lg max-w-[90%] md:max-w-[100%]">
              Depuis notre création, nous avons une mission : transformer vos
              espaces professionnels en lieux propres, sains et inspirants.
            </p>
            <Link
              href="/nos-services"
              className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
            >
              nos services
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex opacity-30 z-1 items-end absolute bottom-0 right-0 lg:opacity-100 2xl:relative 2xl:-bottom-24 lg:max-w-[45%]">
          <Image
            src="/assets/images/home/femme_homme.png"
            alt=""
            width={700}
            quality={100}
            height={0}
            className="md:max-h-[600px] md:flex hidden"
          />
        </div>
      </AnimateContainer>
    </Section>
  );
};
