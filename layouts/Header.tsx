"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, SetOpen] = useState(false);

  const openMenu = () => {
    SetOpen(!open);
    console.log(open);
  };

  return (
<section className="flex justify-between bg-white items-center mx-auto p-8 md:max-w-[97%] w-full md:rounded-tl-3xl md:rounded-tr-3xl md:relative md:mt-4 fixed top-0 left-0 w-full z-50 md:w-auto md:top-auto md:left-auto">
      <AnimateContainer animate="popIn">
        <div className="">
          <Link href="/">
            <Image
              src="/assets/icons/cleano_icon.png"
              alt="Logo Clean'o"
              width={200}
              height={120}
              className="md:max-w-[200px] max-w-[150px]"
            ></Image>
          </Link>
        </div>
      </AnimateContainer>

      {open && (
        <div className="fixed top-10 mt-12 left-0 w-full shadow-md p-6 z-50 bg-white">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/nos-services" className="text-lg font-medium text-gray-800 hover:text-secondary">
              Nos services
            </Link>
            <Link href="/nous-decouvrir" className="text-lg font-medium text-gray-800 hover:text-secondary">
              Nous découvrir
            </Link>
            <Link
            href="/contact"
            className="uppercase px-10 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
          >
            audit gratuit
          </Link>
          </div>
        </div>
      )}

      <AnimateContainer animate="popIn">
        <div className="md:flex gap-20 items-center text-xl hidden">
          <Link href="/nos-services" className="uppercase">
            nos services
          </Link>
          <Link href="/nous-decouvrir" className="uppercase">
            nous découvrir
          </Link>
          <Link
            href="/contact"
            className="uppercase px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl"
          >
            audit gratuit
          </Link>
        </div>
      </AnimateContainer>

      <div className="md:hidden flex">
        <Menu
          size={32}
          className="text-primary cursor-pointer"
          onClick={openMenu}
        />
      </div>
    </section>
  );
};

export { Header };
