import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import Image from "next/image";

export const EquipePassion = () => {
  return (
    <Section className="flex flex-col lg:flex-row items-center gap-0 lg:gap-20">
      <div className="w-full lg:w-2/5 flex justify-center">
        <AnimateContainer>
          <div className="relative w-[350px] sm:w-[350px] md:w-[400px] lg:w-[500px] 2xl:w-[600px] h-auto aspect-[3/4]">
            <Image
              src="/assets/images/home/homme_vitre.png"
              alt="Technicien de nettoyage devant une vitre"
              fill
              className="object-contain"
              priority
            />
          </div>
        </AnimateContainer>
      </div>

      <div className="flex-1 flex flex-col text-start">
        <AnimateContainer delay={0.2}>
          <h2 className="uppercase text-primary text-2xl md:text-4xl font-medium mb-8 md:mb-12">
            une équipe de passionnée proche de vous !
          </h2>
          <div className="text-primary flex flex-col gap-4 text-xl">
            <p className="mb-4">
              Derrière Clean’o, c’est une équipe d’experts formés et engagés qui
              met tout en oeuvre pour répondre à vos attentes. Nous privilégions
              :
            </p>

            <p>😁 La communication claire et transparente.</p>
            <p>🚀 La réactivité face à vos besoins.</p>
            <p>✅ Un suivi personnalisé pour garantir votre satisfaction.</p>
          </div>
        </AnimateContainer>
      </div>
    </Section>
  );
};
