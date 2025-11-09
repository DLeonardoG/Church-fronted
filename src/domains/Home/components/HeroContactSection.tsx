import { CircleUser } from "lucide-react";
import { lazy } from "react";
import { HOME_MEDIA, HOME_TEXTS } from "../constants/homeConfig";

const HeroSection = lazy(() => import("@/core/components/HeroSection"));

export function HeroContactSection() {
  return (
    <HeroSection
      titulo1={HOME_TEXTS.HERO_TITLE_1}
      titulo2={HOME_TEXTS.HERO_TITLE_2}
      video={HOME_MEDIA.VIDEO_PATH}
      buttonText={HOME_TEXTS.HERO_BUTTON_TEXT}
      buttonHref={`#${HOME_TEXTS.HERO_BUTTON_TEXT}`}
      buttonIcon={<CircleUser className="w-5 h-5" />}
    />
  );
}

