import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components";
import { AnimateContainer } from "@/animations";

export const HerobannerServices = () => {
  return (
    <Section size="9/10" className="mt-[150px] md:mt-[50px]">
      <AnimateContainer className="flex items-center bg-third rounded-[60px] md:pl-24 py-24 justify-between overflow-hidden relative">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="uppercase md:text-4xl text-3xl md:text-start text-center font-medium text-primary leading-1 items-center">
            clean'o : bien plus qu'un <br />
            <span className="text-secondary">service nettoyage.</span>
          </h1>
          <p className="text-primary md:max-w-[60%] w-[80%] md:text-start text-center">
            Vous êtes fatigué de gérer des prestataires peu fiables, avec des
            retards et un travail peu soigné ?
          </p>
          <Link
            href="/nos-services"
            className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
          >
            audit gratuit
          </Link>
        </div>

        <div className="flex opacity-40 z-1 items-end absolute bottom-0 right-0 2xl:opacity-100 2xl:relative 2xl:-bottom-24">
          <Image
            src="/assets/images/services/herobanner-services.png"
            alt=""
            width={700}
            height={0}
            className="max-h-[600px]"
          ></Image>
        </div>
      </AnimateContainer>
    </Section>
  );
};
