import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import Image from "next/image";
import { Link } from 'next-view-transitions';

export const Locaux = () => {
  return (
    <Section className="flex flex-col lg:flex-row items-center gap-0 lg:gap-20 mt-12 md:mt-14">
      <div className="w-full lg:w-2/5 flex justify-center">
        <AnimateContainer>
          <div className="relative w-[350px] sm:w-[350px] md:w-[400px] lg:w-[500px] 2xl:w-[600px] h-auto aspect-[3/4]">
            <Image
              src="/assets/images/home/homme_vitre.png"
              alt="Technicien de nettoyage devant une vitre"
              fill
              className="object-contain"
              priority
            />
          </div>
        </AnimateContainer>
      </div>

      <div className="flex-1 flex flex-col text-start max-w-[90%] lg:max-w-fit mx-auto">
        <AnimateContainer delay={0.2}>
          <h2 className="uppercase text-primary text-2xl md:text-4xl font-medium mb-8 md:mb-12">
            Des locaux impeccables pour booster votre{" "}
            <span className="text-secondary">productivité</span> ! 🚀
          </h2>
          <p className="text-primary text-lg mb-6 md:mb-8 text-justify ">
            Vous en avez assez des retards, des prestations peu soignées ou des
            problèmes de suivi pour l'entretien de vos locaux ?
          </p>
          <p className="text-primary text-lg mb-14 text-justify">
            Chez Clean'o, nous comprenons vos enjeux. Grâce à nos services de
            nettoyage personnalisés et notre suivi rigoureux, nous garantissons
            un environnement de travail sain et accueillant, sans effort de
            votre part.
          </p>
          <Link
            href="/nos-services"
            className="uppercase w-fit px-6 py-4 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
          >
            Découvrez nos prestations
          </Link>
        </AnimateContainer>
      </div>
    </Section>
  );
};
