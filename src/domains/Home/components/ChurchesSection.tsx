import { Map } from "@/core/components/geoChurch";
import { ChurchTable } from "@/core/components/tableChurch";
import { HOME_SECTION_IDS, HOME_TEXTS } from "../constants/homeConfig";

export function ChurchesSection() {
  return (
    <section
      id={HOME_SECTION_IDS.CHURCHES}
      className="panel flex flex-col md:flex-row w-full min-h-screen items-center justify-center bg-muted/50 px-10 gap-10"
    >
      <Map />
      <div className="flex flex-col items-center justify-center gap-10 md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          {HOME_TEXTS.CHURCHES_TITLE}
        </h2>
        <ChurchTable />
      </div>
    </section>
  );
}

