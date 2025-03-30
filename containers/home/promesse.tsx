import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Promesse = () => {
  return (
  <Section size="9/10" className="flex mx-auto justify-between gap-12 md:text-start text-center items-center">

      <AnimateContainer className="md:max-w-1/2 lg:block hidden relative top-20">
        <Image
          src="/assets/images/home/femme_homme.png"
          alt=""
          width={650}
          height={0}
          className="relative top-20"
        ></Image>
      </AnimateContainer>
      <AnimateContainer className="flex flex-col gap-5 max-w-[50%] mx-auto" delay={0.2}>
        <h2 className="uppercase text-primary text-4xl font-medium">
          La promesse clean'o 🙌🏼
        </h2>
        <p className="text-lg text-primary">
          Nous vous fournissons un suivi rigoureux, des reportings détaillés, et
          des prestations garanties, adaptées à vos besoins.
        </p>

        <p className="text-lg text-primary">
          Un remboursement ou une seconde intervention gratuite en cas
          d’insatisfaction.
        </p>

        <Link href="/nos-services" className="mt-8 uppercase w-fit px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl mx-auto md:mx-0 md:mb-0 mb-12">découvrez clean'o</Link>
      </AnimateContainer>

  </Section>
  );
};
