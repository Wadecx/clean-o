import Link from "next/link";
import Image from "next/image";

export const HerobannerContact = () => {
  return (
      <section className="uppercase flex flex-row rounded-3xl bg-third md:max-w-[95%] max-w-[90%] mx-auto md:mt-12 mt-[150px] md:min-h-[600px] justify-between">
        <div className="flex flex-col md:ml-12 mt-12 mb-24">
          <h1 className="uppercase md:text-4xl text-3xl md:text-start text-center md:items-start items-center font-medium text-primary leading-1 mb-8 mt-24 items-center">
            Besoin d'un service de nettoyage
            <br /> professionnel ? <br />
            <span className="text-secondary">Contactez clean'o ! </span>
          </h1>
          <div className="flex flex-col md:mt-4 items-center md:items-start">
            <Link
              href="/nos-services"
              className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
            >
              nos services
            </Link>
          </div>
        </div>

        <div className="md:flex items-end mr-12 hidden">
          <Image
            src="/assets/images/cleaning.png"
            alt=""
            width={700}
            height={0}
            className="mt-12 max-h-[600px]"
          ></Image>
        </div>
      </section>
  );
};
