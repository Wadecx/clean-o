import { AnimateContainer } from '@/animations';
import { Section } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export const Locaux = () => {
  return (
    <Section size='9/10' className="flex items-center flex-col xl:flex-row">
      <div className="lg:w-1/2 lg:ml-24 md:mr-0 mx-12">
              <Image
                src="/assets/images/home/homme_vitre.png"
                alt=""
                width={600}
                height={0}
                className="relative left-15"
              ></Image>
            </div>
      <div className="flex-1 flex-col text-start">
        <AnimateContainer delay={0.2}>
          <h2 className="uppercase text-primary md:text-4xl text-2xl font-medium mb-12 mt-4 md:mt-0">
            DES LOCAUX IMPECCABLES POUR BOOSTER VOTRE{' '}
            <span className="text-secondary">PRODUCTIVITÉ</span> ! 🚀
          </h2>
          <p className="text-primary text-lg mb-12">
            Vous en avez assez des retards, des prestations peu soignées ou des
            problème de suvi pour l'entretien de vos locaux ?
          </p>
          <p className="text-primary text-lg mb-12">
            Chez Clean'o, nous comprenons vos enjeux. Grâce à nos services de
            nettoyage personalisés et notre suivi rigoureux, nous garantissons
            un environnement de travail sain et accueillant, sans effort de
            votre part
          </p>
          <Link
            href="/nos-services"
            className="mt-8 uppercase w-fit px-6 py-4 bg-primary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
          >
            découvrez nos prestations
          </Link>
        </AnimateContainer>
      </div>
    </Section>
  );
};
