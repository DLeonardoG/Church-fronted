import { HOME_SECTION_IDS, HOME_TEXTS } from "../constants/homeConfig";

export function CallToActionSection() {
  return (
    <section
      id={HOME_SECTION_IDS.CALL_TO_ACTION}
      className="panel flex items-center justify-center w-full h-[130vh] text-foreground font-bold text-center bg-muted px-7"
    >
      <h2 className="text-[4rem]">
        {HOME_TEXTS.CALL_TO_ACTION}
      </h2>
    </section>
  );
}

