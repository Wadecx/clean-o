import { BaseIleDeFrance } from "@/containers/nos-services/base-ile-de-france";
import { Interventions } from "@/containers/home/interventions";
import { Avis } from "@/containers/home/avis";
import { Metadata } from "next";
import { HerobannerDecouvrir } from "@/containers/nous-decouvrir/HerobannerDecouvrir";
import { EquipePassion } from "@/containers/nous-decouvrir/equipe-passion";

export const metadata: Metadata = {
  title: "Nous découvrir",
  description: "",
};

export default function HomePage() {
  return (
    <>
        <HerobannerDecouvrir />
      <BaseIleDeFrance />
      <Interventions />
      <Avis />
      <EquipePassion />
    </>
  );
}
