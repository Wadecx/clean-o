import { Metadata } from "next";
import { HerobannerContact } from "@/containers/contact/hero-banner-contact";
import { BaseIleDeFrance } from "@/containers/nos-services/base-ile-de-france";
import { Interventions } from "@/containers/home/interventions";

export const metadata: Metadata = {
  title: "Nous Contacter",
  description: "",
};

export default function HomePage() {
  return (
    <>
      <HerobannerContact/>
      <BaseIleDeFrance/>
      <Interventions/>
    </>
  );
}
