import Image from "next/image";
import Link from "next/link";

export const BaseIleDeFrance = () => {
  return (
    <section className="flex mt-24 items-center justify-center">
      <div className="w-1/2 flex flex-col gap-4 text-start">
        <h2 className="text-primary text-3xl uppercase">
          Vous êtes basé en île de france ?
        </h2>
        <p className="text-primary text-lg">Nous sommes à votre service ! </p>
        <p className="text-primary text-lg max-w-[70%]">
          Chez Clean'o, nous avons à cœur de couvrir l'ensemble de votre
          région pour répondre aux besoins des entreprises, commerces, et
          copropriétés peu importe où vous vous trouvez
        </p>
        <p className="text-primary text-lg">
          📍Nous intervenons sur l'Île de France et Paris{" "}
        </p>
        <Link
          href="/nos-services"
          className="mt-8 uppercase w-fit px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
        >
          Contactez-nous
        </Link>
      </div>

      <div>
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
