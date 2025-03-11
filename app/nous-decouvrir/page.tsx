import { Herobanner } from "@/containers/home/herobanner";
import { BaseIleDeFrance } from "@/containers/nos-services/base-ile-de-france";
import { Interventions } from "@/containers/home/interventions";
import { Avis } from "@/containers/home/avis";
import { Locaux } from "@/containers/home/locaux-impecable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous découvrir",
  description: "",
};

export default function HomePage() {
  return (
    <>
        <Herobanner />
      <BaseIleDeFrance />
      <Interventions />
      <Avis />
      <Locaux />
    </>
  );
}
