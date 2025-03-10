import Link from "next/link";
import Image from "next/image";

export const HerobannerServices = () => {
  return (
    <section className="uppercase flex flex-row rounded-3xl bg-third md:max-w-[95%] mx-auto mt-12 min-h-[600px] justify-between">
      <div className="flex flex-col ml-12 mt-12 mb-24">
        <h1 className="uppercase md:text-4xl font-medium text-primary leading-1 mb-8 mt-24 items-center">
          clean'o : bien plus qu'un <br />
          <span className="text-secondary">service nettoyage.</span>
        </h1>
        <p className="text-primary md:max-w-[80%]">
          Vous êtes fatigué de gérer des prestataires peu fiables, avec des
          retards et un travail peu soigné ?
        </p>
        <Link
          href="/nos-services"
          className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
        >
          audit gratuit
        </Link>
      </div>

      <div className="flex items-end mr-12">
        <Image
          src="/assets/images/services/herobanner-services.png"
          alt=""
          width={700}
          height={0}
          className="mt-12 max-h-[600px]"
        ></Image>
      </div>
    </section>
  );
};
