import GraphHome from "@/core/components/graphsHome";
import { HOME_SECTION_IDS } from "../constants/homeConfig";

export function GraphSection() {
  return (
    <section
      id={HOME_SECTION_IDS.GRAPHS}
      className="panel h-[140%] bg-muted/50 flex items-center justify-center"
    >
      <GraphHome />
    </section>
  );
}

