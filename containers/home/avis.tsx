import { Clients } from "@/data/Client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

export const Avis = () => {
  return (
    <section className="flex flex-col justify-center text-center mt-24 mb-24">
      <h2 className="text-4xl text-primary font-medium">
        ILS ONT FAIT LE CHOIX DE{" "}
        <span className="text-secondary">L’EXCELLENCE</span> !
      </h2>
      <div className="flex justyfy-between max-w-[90%] mx-auto items-center">
        <ArrowLeft size={32} className="text-primary relative top-5 mr-8"/>
        <div className="grid grid-cols-3 gap-10 mt-12">
          {Clients.map((avis, index) => (
            <div className="p-8 bg-third rounded-3xl max-w-[500px] min-h-[300px]" key={index}>
              <div className="flex gap-4 max-w-fit">
                <Image src={avis.img} width={60} height={0} alt=""></Image>
                <div className="flex flex-col text-start">
                    <p className="text-primary">{avis.name}</p>
                    <p className="text-white bg-primary rounded-lg py-1 px-3 uppercase">{avis.role}</p>
                </div>
              </div>
              <div className="flex flex-col text-start mt-4">
                <p className="mb-2">{avis.rate}</p>
                <p className="">{avis.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <ArrowRight size={32} className="text-primary relative top-5 ml-8"/>

      </div>
    </section>
  );
};
