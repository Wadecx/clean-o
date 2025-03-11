import Image from "next/image";
import Link from "next/link";

export const Promesse = () => {
  return (
    <section className="flex max-w-[80%] mx-auto md:mt-24 mt-8 justify-between gap-12 md:text-start text-center">
      <div className="md:max-w-1/2 mt-12 md:block hidden">
        <Image
          src="/assets/images/home/femme_homme.png"
          alt=""
          width={650}
          height={0}
          className="relative top-2"
        ></Image>
      </div>
      <div className="md:flex-1 md:ml-24 mt-12 flex flex-col gap-5">
        <h2 className="uppercase text-primary text-4xl font-medium">
          La promesse clean'o 🙌🏼
        </h2>
        <p className="text-lg text-primary">
          Nous vous fournissons un suivi rigoureux, des reportings détaillés, et
          des prestations garanties, adaptées à vos besoins.
        </p>

        <p className="text-lg text-primary">
          Un remboursement ou une seconde intervention gratuite en cas
          d’insatisfaction.
        </p>

        <Link href="/nos-services" className="mt-8 uppercase w-fit px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl mx-auto md:mx-0 md:mb-0 mb-12">découvrez clean'o</Link>
      </div>
    </section>
  );
};
