import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="flex md:max-w-[90%] mx-auto mt-8 p-4 justify-between items-center">
        <div className="">
          <Link href="/"><Image src="/assets/icons/cleano_icon.png" alt="Logo Clean'o" width={200} height={120} className=""></Image></Link>
        </div>

        <div className="flex gap-20 items-center text-xl">
          <Link href="/nos-services" className="uppercase">nos services</Link>
          <Link href="/nous-decouvrir" className="uppercase">nous découvrir</Link>
          <Link href="/nous-contactez" className="uppercase px-8 py-3 bg-secondary text-white rounded-xl font-bold shadow-lg transition duration-300 hover:shadow-xl">audit gratuit</Link>
        </div>
    </section>
  );
};

export { Header };
