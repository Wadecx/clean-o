"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Section } from "@/components";
import { AnimateContainer } from "@/animations";

export const Incontournable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Section
      size="9/10"
      className=" mx-auto flex justify-center lg:flex-row flex-col"
    >
      <div className="lg:w-1/2 items-center mt-4 lg:block flex flex-col justify-center ">
        <h2 className="lg:text-4xl text-3xl text-primary uppercase w-[80%] font-medium mb-4 lg:text-start text-center">
          Pourquoi nous sommes le partenaire{" "}
          <span className="text-secondary">incontournable</span>?
        </h2>
        <p className="text-primary mb-12 text-lg md:max-w-[55%] md:mx-0 mx-auto md:text-start text-center">
          De nombreux avantages vous attendent avec Clean'o, votre expert, en
          nettoyage professionnel !
        </p>
        <div className="max-w-[80%]">
          <AnimateContainer>
            <h3
              className="text-xl font-medium flex items-center justify-between cursor-pointer text-primary"
              onClick={toggleParagraph}
            >
              Un environnement de travail toujours parfait.
              <Plus
                className={`transition-transform ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              />
            </h3>
            <p
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              Profitez de locaux propres et accueillants qui renforcent la
              productivité de vos équipes et l'image de votre entreprise.
            </p>
            <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          </AnimateContainer>
          <AnimateContainer delay={0.2}>
            <h3 className="text-xl text-primary font-medium mb-4 flex items-center justify-between cursor-pointer">
              Une gestion simplifié sans effort.
              <Plus />
            </h3>
            <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          </AnimateContainer>
          <AnimateContainer delay={0.4}>
            <h3 className="text-xl text-primary font-medium mb-4 flex items-center justify-between cursor-pointer">
              Une réactivité exemplaire.
              <Plus />
            </h3>
            <span className="w-full h-[0.02rem] block bg-black my-8"></span>
          </AnimateContainer>
        </div>
      </div>

      <div className="mx-12 lg:mx-0 lg:flex lg:justify-center">
        <Image
          src="/assets/images/home/homme_menage.png"
          alt=""
          width={600}
          height={0}
          className="max-h-[560px]"
        ></Image>
      </div>
    </Section>
  );
};
