import { Section } from "@/components";

export const Tally = () => {
  return (
    <Section size="9/10" className="flex justify-center py-8 bg-third rounded-3xl">
      <div className="max-w-[80%] w-full min-h-max">
        <iframe
          src="https://tally.so/embed/3qv8k8?alignLeft=1&hideTitle=1&dynamicHeight=1"
          loading="lazy"
          height="975"
          width="100%"
          title="RÉSERVER VOTRE TABLE"
          className=""
        />
      </div>
    </Section>
  );
};
