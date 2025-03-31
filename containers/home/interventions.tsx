import { AnimateContainer } from '@/animations';
import { Section } from '@/components';
import Image from 'next/image';

export const Interventions = () => {
  return (
    <Section className="flex justify-evenly flex-col md:flex-row gap-12 md:gap-0 items-center">
      <AnimateContainer className="flex flex-col gap-4 items-center text-center">
        <Image
          src="/assets/images/home/c1.png"
          alt=""
          width={120}
          height={0}
          className=""
        ></Image>
        <h2 className="uppercase text-primary text-center text-xl font-bold">
          intervention <br /> rapide
        </h2>
        <p className="text-primary text-lg font-medium">
          Urgence prise en
          <br /> charge sous 24H.
        </p>
      </AnimateContainer>
      <AnimateContainer
        delay={0.2}
        className="flex flex-col gap-4 items-center text-center"
      >
        <Image
          src="/assets/images/home/c2.png"
          alt=""
          width={120}
          height={0}
          className="mt-4"
        ></Image>
        <h2 className="uppercase text-primary text-center text-xl font-bold">
          Expertise <br /> multi-secteur
        </h2>
        <p className="text-primary text-lg font-medium">
          Cabinets médicaux, bureaux
          <br /> commerces, syndics.
        </p>
      </AnimateContainer>
      <AnimateContainer
        delay={0.4}
        className="flex flex-col gap-4 items-center text-center"
      >
        <Image
          src="/assets/images/home/c3.png"
          alt=""
          width={120}
          height={0}
          className="mt-6"
        ></Image>
        <h2 className="uppercase text-primary text-center text-xl font-bold">
          Engagement <br />
          écologique
        </h2>
        <p className="text-primary text-lg font-medium">
          Produit respectueux
          <br />
          de l'environnement
        </p>
      </AnimateContainer>
    </Section>
  );
};
