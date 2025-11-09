import GraphHome from "@/core/components/graphsHome";
import { HOME_SECTION_IDS } from "../constants/homeConfig";

export function GraphSection() {
  return (
    <section
      id={HOME_SECTION_IDS.GRAPHS}
      className="panel min-h-screen bg-muted flex items-center justify-center"
    >
      <GraphHome />
    </section>
  );
}

