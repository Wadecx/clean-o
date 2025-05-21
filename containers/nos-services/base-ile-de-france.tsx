import { Section } from "@/components";
import Image from "next/image";
import { Link } from 'next-view-transitions';

export const BaseIleDeFrance = () => {
  return (
    <Section
      size="9/10"
      className="flex md:items-center justify-center md:flex-row flex-col"
    >
      <div className="md:w-1/2 md:items-start md:text-start text-start flex flex-col gap-4">
        <h2 className="text-primary md:text-3xl text-2xl uppercase md:text-start">
          Vous êtes basé en île de france ?
        </h2>
        <p className="text-primary text-lg">Nous sommes à votre service ! </p>
        <p className="text-primary text-lg lg:max-w-[70%] text-start">
          Chez Clean'o, nous avons à cœur de couvrir l'ensemble de votre région
          pour répondre aux besoins des entreprises, commerces, et copropriétés
          peu importe où vous vous trouvez
        </p>
        <p className="text-primary text-lg">
          📍Nous intervenons sur l'Île de France et Paris{" "}
        </p>
        <Link
          href="/contact"
          className="mt-8 md:mb-0 mb-12 uppercase w-fit px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
        >
          Contactez-nous
        </Link>
      </div>

      <div className="md:flex hidden md:mx-0 mx-12">
        <Image
          src="/assets/images/services/france.png"
          alt=""
          width={500}
          height={0}
        />
      </div>
    </Section>
  );
};
