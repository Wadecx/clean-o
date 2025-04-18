import { Section } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const CleanoEtVous = () => {
  return (
    <Section
      size="9/10"
      className="flex items-center flex justify-center lg:flex-row flex-col 3xl: gap-20"
    >
      <div className="lg:w-1/2 lg:ml-24 md:mr-0 mx-12">
        <Image
          src="/assets/images/home/homme_vitre.png"
          alt=""
          width={600}
          height={0}
          className="relative left-15"
        ></Image>
      </div>

      <div className="flex-col md:mr-24 lg:text-start">
        <h2 className="uppercase text-primary md:text-4xl text-3xl font-medium mb-12">
          est-ce que clean'o est fait pour vous ?
        </h2>
        <p className="text-primary text-lg mb-4 md:max-w-[90%] max-w-[95%] mx-auto md:mx-0">
          Vous êtes fatigué de gérer des prestataires peu fiables, avec des
          retards et un travail peu soigné ?
        </p>
        <p className="text-primary text-lg mb-4 md:max-w-[90%] max-w-[95%] mx-auto md:mx-0">
          Vous chercher un partenaire capable de garantir propreté irréprochable
          sans avoir à superviser ?
        </p>
        <p className="text-primary text-lg mb-4 md:max-w-[90%] max-w-[95%] mx-auto md:mx-0">
          Vous souhaitez un service rapide, flexible, et respectueux de votre
          environnement ?
        </p>
        <p className="text-primary text-lg mb-12 md:max-w-[90%] max-w-[95%] mx-auto md:mx-0">
          Si vous avez répondu oui à une ou plusieurs de ces questions, Clean'o
          est le partenaire qu'il vous faut.
        </p>
        <Link
          href="/nos-services"
          className="mt-8 uppercase w-fit px-6 py-4 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
        >
          Contactez-nous
        </Link>
      </div>
    </Section>
  );
};
