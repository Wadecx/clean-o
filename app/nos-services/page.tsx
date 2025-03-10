import { Avis } from "@/containers/home/avis";
import { Interventions } from "@/containers/home/interventions";
import { BaseIleDeFrance } from "@/containers/nos-services/base-ile-de-france";
import { CleanoEtVous } from "@/containers/nos-services/Cleano-et-vous";
import { HerobannerServices } from "@/containers/nos-services/herobanner-services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services",
  description: "",
};

export default function HomePage() {
  return (
    <>
      <HerobannerServices />
      <BaseIleDeFrance />
      <Interventions/>
      <CleanoEtVous/>
      <Avis/>
    </>
  );
}
