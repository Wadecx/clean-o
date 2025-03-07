import Link from "next/link";
import Image from "next/image";

export const Herobanner = () => {
  return (
    <section className="uppercase flex flex-row rounded-3xl bg-third md:max-w-[95%] mx-auto mt-12 min-h-[700px] items-center justify-between">
      <div className="flex flex-col ml-12 mt-12 mb-24">
        <h1 className="uppercase md:text-4xl font-medium text-primary leading-1 ">
          votre environnement
          <br /> professionnel, <br /> notre{" "}
          <span className="text-secondary">priorité absolue.</span>
        </h1>
        <div className="flex gap-5 mt-4 items-center">
          <p className="uppercase text-primary text-xl">propreté</p>
          <span className="w-[2px] h-[30px] block bg-primary"></span>
          <p className="uppercase text-primary text-xl">fiabilité</p>
          <span className="w-[2px] h-[30px] block bg-primary"></span>
          <p className="uppercase text-primary text-xl">exelence</p>
        </div>
        <div className="flex flex-col mt-4">
            <h2 className="font-black text-primary text-xl">⭐⭐⭐⭐⭐ 4.9/5</h2>
            <p className="uppercase text-primary font-medium text-lg">basé sur 137 avis</p>
          <Link href="/nos-services" className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl">audit gratuit</Link>
        </div>
      </div>

      <div className="flex relative top-[84px]">
      <Image src="/assets/images/cleaning.png" alt="" width={800} height={0} className="mt-12"></Image>
      </div>
    </section>
  );
};
