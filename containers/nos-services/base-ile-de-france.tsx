import Image from "next/image";
import Link from "next/link";

export const BaseIleDeFrance = () => {
  return (
    <section className="flex mt-24 md:items-center justify-center md:flex-row flex-col">
      <div className="md:w-1/2 md:items-start items-center md:text-start md:text-start text-center flex flex-col gap-4">
        <h2 className="text-primary md:text-3xl text-2xl uppercase text-center md:text-start">
          Vous êtes basé en île de france ?
        </h2>
        <p className="text-primary text-lg">Nous sommes à votre service ! </p>
        <p className="text-primary text-lg max-w-[70%] text-center md:text-start">
          Chez Clean'o, nous avons à cœur de couvrir l'ensemble de votre
          région pour répondre aux besoins des entreprises, commerces, et
          copropriétés peu importe où vous vous trouvez
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

      <div className="md:mx-0 mx-12">
        <Image
          src="/assets/images/services/idf.png"
          alt=""
          width={500}
          height={0}
        />
      </div>
    </section>
  );
};
