"use client";

import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/common/Accordion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const QUESTIONS = [
  {
    question: "Un environnement de travail toujours parfait.",
    answer:
      "Profitez de locaux propres et accueillants qui renforcent la productivité de vos équipes et l’image de votre entreprise.",
  },
  {
    question: "Une gestion simplifée, sans éffort.",
    answer:
      "",
  },
  {
    question: "Une réactivité exemplaire.",
    answer:
      "",
  },
];

export const Questions = () => {
  return (
    <Section
      size="full"
      className="mx-auto flex justify-center lg:flex-row flex-col lg:mt-0 mb-0 lg:mb-0 mt-0 pt-12 lg:pt-0 pb-24"
    >
      <div className="w-full">
        <AnimateContainer className="flex max-w-8/10 mx-auto 3xl:max-w-[1440px] flex-col xl:flex-row items-center justify-between gap-24">
          <div className="space-y-12 w-full xl:w-6/12">
            <h2 className="text-2xl lg:text-4xl font-medium uppercase text-primary">
              {" "}
              Pourquoi nous sommes le partenaire{" "}
              <span className="text-secondary">incontournable</span> ?
            </h2>
            {QUESTIONS.map(({ question, answer }, index) => (
              <Accordion type="multiple" key={index}>
                <AccordionItem value={question}>
                  <AccordionTrigger className="lg:text-xl">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="lg:text-lg">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="flex-1 xl:mt-24">
            <Image
              src="/assets/images/home/homme_menage.png"
              alt=""
              width={0}
              height={0}
              className="w-full"
            />
          </div>
        </AnimateContainer>
      </div>
    </Section>
  );
};
