import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import Image from "next/image";
import { Link } from 'next-view-transitions';

export const CleanoEtVous = () => {
  return (
    <Section className="flex flex-col lg:flex-row items-center gap-0 lg:gap-20 mt-12 md:mt-14">
      <div className="w-full lg:w-2/5 flex justify-center">
        <AnimateContainer>
          <div className="relative w-[350px] sm:w-[340px] md:w-[400px] lg:w-[500px] 2xl:w-[600px] aspect-[3/4]">
            <Image
              src="/assets/images/home/homme_vitre.png"
              alt="Technicien Clean'o"
              fill
              className="object-contain"
              priority
            />
          </div>
        </AnimateContainer>
      </div>

      <div className="flex-1 flex-col text-start max-w-[90%] lg:max-w-fit mx-auto">
        <AnimateContainer delay={0.2}>
          <h2 className="uppercase text-primary text-2xl md:text-4xl font-medium mb-8 md:mb-12 mt-4 md:mt-0">
            est-ce que clean’o est fait pour vous ?
          </h2>
          <div className="flex flex-col gap-4 mb-8 text-primary text-lg max-w-[90%]">
            <p>
              Vous êtes fatigué de gérer des prestataires peu fiables, avec des
              retards et un travail peu soigné ?
            </p>
            <p>
              Vous cherchez un partenaire capable de garantir une propreté
              irréprochable sans avoir à superviser ?
            </p>
            <p>
              Vous souhaitez un service rapide, flexible et respectueux de votre
              environnement ?
            </p>
            <p>
              Si vous avez répondu oui à une ou plusieurs de ces questions,
              Clean’o est le partenaire qu’il vous faut.
            </p>
          </div>

          <Link
            href="/nos-services"
            className="flex mt-8 uppercase w-fit px-6 py-4 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
          >
            contactez-nous
          </Link>
        </AnimateContainer>
      </div>
    </Section>
  );
};
