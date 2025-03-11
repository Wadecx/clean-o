import Image from "next/image"

export const Interventions = () => {
    return(
        <section className="flex w-[70%] justify-between mx-auto mt-24 items-center mb-12 md:flex-row flex-col">
            <div className="flex flex-col gap-4 items-center text-center">
                    <Image src="/assets/images/home/c1.png" alt="" width={120} height={0} className=""></Image>
                    <h2 className="uppercase text-primary text-center text-xl font-bold">intervention <br/> rapide</h2>
                    <p className="text-primary text-lg font-medium">Urgence prise en<br/> charge sous 24H.</p>
            </div>
            <div className="flex flex-col gap-4 items-center text-center">
                    <Image src="/assets/images/home/c2.png" alt="" width={120} height={0} className="mt-4"></Image>
                    <h2 className="uppercase text-primary text-center text-xl font-bold">Expertise <br/> multi-secteur</h2>
                    <p className="text-primary text-lg font-medium">Cabinets médicaux, bureaux<br/> commerces, syndics.</p>
            </div>
            <div className="flex flex-col gap-4 items-center text-center">
                    <Image src="/assets/images/home/c3.png" alt="" width={120} height={0} className="mt-6"></Image>
                    <h2 className="uppercase text-primary text-center text-xl font-bold">Engagement <br/>écologique</h2>
                    <p className="text-primary text-lg font-medium">Produit respectueux<br/>de l'environnement</p>
            </div>
        </section>
    )
}