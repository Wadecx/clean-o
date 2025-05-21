import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import Image from "next/image";

export const Interventions = () => {
  return (
    <Section className="flex flex-col md:flex-row justify-evenly gap-12 md:gap-0">
      {[
        {
          src: "/assets/images/home/c1.png",
          title: "intervention rapide",
          text: "Urgence prise en\ncharge sous 24H.",
          delay: 0,
        },
        {
          src: "/assets/images/home/c2.png",
          title: "expertise multi-secteur",
          text: "Cabinets médicaux, bureaux\ncommerces, syndics.",
          delay: 0.2,
        },
        {
          src: "/assets/images/home/c3.png",
          title: "engagement écologique",
          text: "Produit respectueux\nde l'environnement",
          delay: 0.4,
        },
      ].map((item, index) => (
        <AnimateContainer
          key={index}
          delay={item.delay}
          className="flex flex-col items-center text-center gap-4"
        >
          <div className="relative h-32 w-32"> 
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-primary text-xl font-bold uppercase leading-tight">
            {item.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-primary text-lg font-medium leading-snug whitespace-pre-line">
            {item.text}
          </p>
        </AnimateContainer>
      ))}
    </Section>
  );
};
