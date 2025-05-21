import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import { Clients } from "@/data/Client";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

export const Avis = () => {
  return (
    <Section
      size="9/10"
      className="flex flex-col justify-center lg:text-center text-start mt-24 mb-24"
    >
      <h2 className="md:text-4xl text-2xl text-primary font-medium md:w-full w-[97%] mx-auto md:mx-0">
        ILS ONT FAIT LE CHOIX DE{" "}
        <span className="text-secondary">L’EXCELLENCE</span> !
      </h2>
      <div className="flex justyfy-between max-w-[90%] mx-auto items-center">
        <ArrowLeft size={32} className="text-primary relative top-5 mr-8 lg:block hidden" />
        <div className="grid lg:grid-cols-3 gap-10 mt-12">
          {Clients.map((avis, index) => (
            <AnimateContainer
              className="p-8 bg-third rounded-3xl max-w-[700px] min-h-[300px] "
              key={index}
              delay={avis.delay}
            >
              <div className="flex gap-4 max-w-fit">
                <Image src={avis.img} width={60} height={0} alt=""></Image>
                <div className="flex flex-col text-start">
                  <p className="text-primary">{avis.name}</p>
                  <p className="text-white bg-primary rounded-lg py-1 px-3 text-xs uppercase">
                    {avis.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-start mt-4">
                <p className="mb-2">{avis.rate}</p>
                <p className="">{avis.desc}</p>
              </div>
            </AnimateContainer>
          ))}
        </div>
        <ArrowRight size={32} className="text-primary relative top-5 ml-8 lg:block hidden" />
      </div>
    </Section>
  );
};
