import Image from "next/image";
import Link from "next/link";

export const CleanoEtVous = () => {
  return (
    <section className=" mt-24 flex items-center flex justify-center">
      <div className="w-1/2 ml-24">
        <Image
          src="/assets/images/home/homme_vitre.png"
          alt=""
          width={600}
          height={0}
          className="relative left-15"
        ></Image>
      </div>

      <div className="flex-1 flex-col mr-24">
        <h2 className="uppercase text-primary text-4xl font-medium mb-12">
          est-ce que clean'o est fait pour vous ?
        </h2>
        <p className="text-primary text-lg mb-4 max-w-[90%]">
          Vous êtes fatigué de gérer des prestataires peu fiables, 
          avec des retards et un travail peu soigné ?
        </p>
        <p className="text-primary text-lg mb-4 max-w-[90%]">
          Vous chercher un partenaire capable de garantir propreté irréprochable sans avoir à superviser ?
        </p>
        <p className="text-primary text-lg mb-4 max-w-[90%]">
          Vous souhaitez un service rapide, flexible, et respectueux de votre environnement ?
        </p>
        <p className="text-primary text-lg mb-12 max-w-[90%]">
          Si vous avez répondu oui à une ou plusieurs de ces questions, Clean'o est le partenaire qu'il vous faut.
        </p>
        <Link href="/nos-services" className="mt-8 uppercase w-fit px-6 py-4 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl">Contactez-nous</Link>

      </div>
    </section>
  );
};
