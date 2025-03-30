import { Metadata } from "next";
import { HerobannerContact } from "@/containers/contact/hero-banner-contact";
import { BaseIleDeFrance } from "@/containers/nos-services/base-ile-de-france";
import { Interventions } from "@/containers/home/interventions";
import { Tally } from "@/containers/contact/tally";

export const metadata: Metadata = {
  title: "Nous Contacter",
  description: "",
};

export default function HomePage() {
  return (
    <>
      <HerobannerContact/>
      <Tally/>
      <BaseIleDeFrance/>
      <Interventions/>
    </>
  );
}
