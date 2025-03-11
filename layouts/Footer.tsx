import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return(
    <section className="p-12 flex bg-secondary md:justify-evenly md:flex-row flex-col md:gap-0 gap-12">
      <div className="mt-12">
        <Image src="/assets/icons/cleano_footer.png" alt="" width={250} height={120}></Image>
        <p className="text-white mt-4">2025 - Tout droits réservés</p>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-white">CLEAN'O</h3>
        <Link href="/nos-services" className="uppercase text-white hover:underline ">nos services</Link>
        <Link href="/nos-services" className="uppercase text-white hover:underline">nous decouvrir</Link>
        <Link href="/nos-services" className="uppercase text-white hover:underline">Audit gratuit</Link>
        <Link href="/nos-services" className="uppercase text-white hover:underline">contactez-nous</Link>
      </div>
      <div className="flex flex-col">
    <h3 className="mb-2 text-white uppercase">besoin d'aide ?</h3>
    <a href="mailto:contact@cleano-services.fr" className="text-white">contact@cleano-services.fr</a>
    <a href="tel:0652567418" className="text-white">06 52 56 74 18</a>
    <Link href="" className="uppercase mt-8 text-white">Politique de confidentialité</Link>
      </div>
    </section>
  );
};

export { Footer };
