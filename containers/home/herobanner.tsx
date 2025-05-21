import { AnimateContainer } from '@/animations';
import { Section } from '@/components';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

export const Herobanner = () => {
  return (
    <Section size="9/10" className="mt-[150px] md:mt-[170px]">
      <AnimateContainer className="flex items-center bg-third rounded-[60px] md:pl-24 py-24 justify-between overflow-hidden relative">
        <div className="flex z-10 flex-col md:items-start md:text-start items-center text-center">
          <h1 className="uppercase max-w-4xl md:text-5xl text-3xl 2xl:max-w-3xl lg:max-w-2xl font-medium text-primary leading-1 items-center">
            votre environnement professionnel, notre{' '}
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
            <h2 className="font-black text-primary text-xl">
              ⭐⭐⭐⭐⭐ 4.9/5
            </h2>
            <p className="uppercase text-primary font-medium text-lg">
              basé sur 137 avis
            </p>
            <Link
              href="/contact"
              className="mt-8 uppercase w-fit px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
            >
              audit gratuit
            </Link>
          </div>
        </div>

        <div className="flex opacity-30 z-1 items-end absolute bottom-0 right-0 lg:opacity-100 2xl:relative 2xl:-bottom-24 lg:max-w-[60%]">
          <Image
            src="/assets/images/cleaning.png"
            alt=""
            width={900}
            quality={100}
            height={0}
            className="md:max-h-[600px] md:flex hidden"
          ></Image>
        </div>
      </AnimateContainer>
    </Section>
  );
};
