import Link from "next/link";
import Image from "next/image";

export const Herobanner = () => {
  return (

    <section className="uppercase flex md:flex-row flex-col rounded-3xl bg-third md:max-w-[95%] max-w-[90%] mx-auto md:mt-12 mt-[150px] md:min-h-[600px] md:justify-between justify-center">
      <div className="flex flex-col md:ml-12 mt-12 mb-24 md:items-start md:text-start items-center text-center">
      <h1 className="uppercase md:text-4xl text-3xl font-medium text-primary leading-1 md:mb-8 mt-24 items-center">
          votre environnement
          <br /> professionnel, <br /> notre{" "}
          <span className="text-secondary">priorité absolue.</span>
        </h1>
        <div className="flex gap-5 mt-4 items-center">
          <p className="uppercase text-primary md:text-xl">propreté</p>
          <span className="md:w-[2px] md:h-[30px] w-[1px] h-[20px] block bg-primary"></span>
          <p className="uppercase text-primary md:text-xl">fiabilité</p>
          <span className="md:w-[2px] md:h-[30px] w-[1px] h-[20px] block bg-primary"></span>
          <p className="uppercase text-primary md:text-xl">exelence</p>
        </div>
        <div className="flex flex-col mt-4">
            <h2 className="font-black text-primary text-xl">⭐⭐⭐⭐⭐ 4.9/5</h2>
            <p className="uppercase text-primary font-medium text-lg">basé sur 137 avis</p>
          <Link href="/nos-services" className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl">audit gratuit</Link>
        </div>
      </div>

     <div className="flex items-end mr-12">
             <Image
               src="/assets/images/cleaning.png"
               alt=""
               width={700}
               height={0}
               className="md:mt-12 md:max-h-[600px] md:flex hidden"
             ></Image>
           </div>
    </section>
  );
};
